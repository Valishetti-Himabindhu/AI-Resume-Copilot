import { useState, useEffect } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import TemplateRenderer from "./TemplateRenderer"
import resumeRequirements from "../config/resumeRequirements";
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(API_KEY)
  import AIResumeChat from "../components/AIResumeChat";
  

import { saveAs } from "file-saver"
function JDAnalyzerAI() {
  const [jobDescription, setJobDescription] = useState("")
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState([])
  const [skillLevels, setSkillLevels] = useState({})
  const [questions, setQuestions] = useState([])
  const [questionLoading, setQuestionLoading] = useState(false)
  const [answers, setAnswers] = useState({})
  const [resumeData, setResumeData] = useState(null)
  const [resumeLoading, setResumeLoading] = useState(false)
  const [matchAnalysis, setMatchAnalysis] =useState(null)
  const [missingInfo, setMissingInfo] =useState([])
  const [resumeTemplate, setResumeTemplate] =useState("ATS")
  const [currentTemplate, setCurrentTemplate] = useState("ATS")
  const [improvementPrompt, setImprovementPrompt] = useState("")
  const [regenerating, setRegenerating] = useState(false)
  const [sections, setSections] = useState({
summary:true,
skills:true,
projects:true,
certifications:true,
internships:true,
achievements:true,
leadership:true,
education:true
})
const [completenessScore, setCompletenessScore] = useState(0)
const [dashboard, setDashboard] = useState(null)
const [missingFields, setMissingFields] = useState([])
const [chatLoading, setChatLoading] = useState(false);
const [wantPhoto, setWantPhoto] = useState("No");
const [profilePhoto, setProfilePhoto] = useState("");


useEffect(() => {

  const savedResume =
    localStorage.getItem("savedResume")

  if (savedResume) {

    setResumeData(
      JSON.parse(savedResume)
    )

  }

}, [])
  
  const analyzeJD = async () => {
    if (!jobDescription) return
    // Clear previous resume when starting a new analysis
setResumeData(null);
setMatchAnalysis(null);
setMissingInfo([]);
setDashboard(null);
setCompletenessScore(0);

localStorage.removeItem("savedResume");
    setLoading(true)
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      })
      const result = await model.generateContent(`
Return ONLY valid JSON.
{
  "skills": [],
  "technologies": [],
  "tools": [],
  "keywords": [],
  "responsibilities": [],
  "softSkills": [],
  "preferredQualifications": [],
  "checklist": [],
  "experience": ""
}
  

Classify skills intelligently.

Technical skills:
Programming languages, frameworks, libraries,
databases, cloud technologies, APIs, tools,
platforms, AI/ML technologies, software engineering concepts.

Problem-solving skills:
DSA, Algorithms, Competitive Programming,
Logical Thinking, Analytical Thinking,
Debugging, Problem Solving.

Soft skills:
Communication, Leadership, Teamwork,
Adaptability, Collaboration,
Time Management.

Place ALL technical and problem-solving skills inside "skills".

Place ONLY interpersonal skills inside "softSkills".

Analyze this Job Description:
${jobDescription}
`)
      const response = await result.response
      const text = response.text()
      const cleanText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
      let parsedData

try{
parsedData = JSON.parse(cleanText)
}
catch{
alert("Invalid Match Analysis")
return
}

parsedData.skills = [
  ...(parsedData.skills || []),
  ...(parsedData.technologies || []),
  ...(parsedData.tools || [])
]

parsedData.skills = [...new Set(parsedData.skills)]

setAnalysis(parsedData)
    } catch (error) {
      console.log(error)
      alert("Analysis failed")
    }
    finally {
  setLoading(false)
}
  }
const toggleSkill = (skill) => {
  if (selectedSkills.includes(skill)) {
    setSelectedSkills(prev =>
  prev.filter(item => item !== skill)
)
  } else {
    setSelectedSkills(prev => [
     ...prev,
  skill
])
  }
}
const generateQuestions = async () => {
  if (selectedSkills.length === 0) {
    alert("Select at least one skill")
    return
  }
  setQuestionLoading(true)
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    })
    const result = await model.generateContent(`
Return ONLY valid JSON.
{
  "questions": []
}
You are an AI Resume Assistant.
Selected Skills:
${JSON.stringify(selectedSkills)}
Skill Levels:
${JSON.stringify(skillLevels)}
Treat these as Problem Solving Skills:

- DSA
- Data Structures
- Algorithms
- Competitive Programming
- Problem Solving
- Analytical Thinking
- Logical Thinking
- Debugging

Everything else should be classified according to context.


Generate questions STRICTLY skill-by-skill.

IMPORTANT RULES:

1. Process EACH selected skill separately.

2. Never combine multiple skills together.

3. Never skip any selected skill.

4. Never ask questions for skills that are not selected.

5. Generate questions in the exact order below.

----------------------------------

If skill is Technical:

Ask ALL questions:

- Do you have experience with [Skill]?
- What is your proficiency level in [Skill]?
- Have you built any project using [Skill]?
- Project Name using [Skill]
- Project Description using [Skill]
- Technologies Used in [Skill] Project
- GitHub Link for [Skill] Project
- Have you used [Skill] in any certification course or exam?
- Internship related to [Skill]
- Achievement related to [Skill]





IMPORTANT RULE:
- Certifications,internship and achievement here MUST be ONLY related to this skill
- Do NOT ask for full certification,internship and achievement list here
- Keep answer inside this skill only

----------------------------------

If skill is Problem Solving:

Ask ALL questions:

- What is your proficiency level in [Skill]?
- How many problems have you solved?
- Which coding platforms have you used?
- Have you participated in contests?
- Rankings achieved
- Achievements related to [Skill]

Never ask project questions.

----------------------------------

If skill is Soft Skill:

Ask ALL questions:

- Describe an experience demonstrating [Skill]
- Leadership experience related to [Skill]
- Achievement related to [Skill]

Never ask project questions.

----------------------------------

After ALL selected skills are completed ask:

MANDATORY QUESTIONS

- Full Name
- Email Address
- Phone Number
- Current Location
- LinkedIn URL
- GitHub URL
- Portfolio URL

EDUCATION

Ask ONLY ONE question:

"Provide your complete education details (10th, 12th, and degree) in one single response(includes institute name passing year cgpa if applicable course also)"

Do NOT split into multiple questions.

CERTIFICATIONS

Ask ONLY ONE question:

"Describe any other certifications including certification name and platform if you have done
(Example: communication, leadership, hackathons, workshops)  "

Do NOT split into multiple questions.
Do NOT ask year.


INTERNSHIPS

Ask ONLY ONE question:

"Describe any other interships if you have done "

Do NOT split into multiple questions.
Do NOT ask year.

LEADERSHIP
Ask ONLY ONE question:
"Any Leadership roles"


EXTRACURRICULAR

Ask ONLY ONE question:
"Any extracurricular activities (Volunteering,Events,Activities)"

ACHIEVEMENTS
Ask ONLY ONE question:
"Any Achievements (Awards,Scholarships,Rankings)"

IMPORTANT RULE:
- Do NOT repeat skill-based certifications,internships and achievements here which are already mentioned in above skills

ADDITIONAL INFORMATION

- Anything else you want included

Return ONLY JSON.

Example:

{
  "questions":[
    "Do you have experience with Python?",
    "What is your proficiency level in Python?",
    "Have you built any project using Python?",
    "Project Name using Python"
  ]
}
Return JSON only.
`)
    const response = await result.response
    const text = response.text()
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()
    let parsedData
    try {
      parsedData = JSON.parse(cleanText)
    } catch (err) {
      console.log(cleanText)
      alert("Invalid JSON returned by Gemini")
      return
    }
    setQuestions(
      Array.isArray(parsedData.questions)
        ? parsedData.questions
        : [parsedData.questions]
    )
  } catch (error) {
    console.log(error)
    alert("Question generation failed")
  } finally {
    setQuestionLoading(false)
  }
}
const generateResume = async () => {

  setResumeLoading(true)

  try {

    const missing = detectTemplateMissingFields()

    if (missing.length > 0) {

      alert("Please answer all missing information first.")

      setResumeLoading(false)

      return

    }

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      })

    const result =
      await model.generateContent(`

You are an expert ATS Resume Writer.

Job Description:

${jobDescription}

Selected Skills:

${JSON.stringify(selectedSkills)}

Skill Levels:

${JSON.stringify(skillLevels)}

User Answers:

${JSON.stringify(answers)}

INPUT LOCK RULE:
Treat "User Answers" as the ONLY source of truth.
Do NOT use Job Description to add missing skills or experience.

Selected Sections:

${JSON.stringify(sections)}

Resume Style Preference:

${resumeTemplate}


Resume Template:

${resumeTemplate}

Use the selected template ONLY for visual styling.

Do NOT change the resume content because of the selected template.

The frontend will handle fonts, colors, spacing and layout.

Generate only clean resume data.


JOB DESCRIPTION RULE:
Use JD ONLY for:
- Keywords
- Formatting priority
NOT for adding new skills or experience

Create a professional resume.

Template Selected:

${resumeTemplate}




Use ONLY information provided by the user.

If the user provides GitHub, LinkedIn, Portfolio, LeetCode, HackerRank or CodeChef links, place them inside personalInfo.

If not provided, leave them empty.

Never generate fake links.

If the user knows multiple spoken languages, include them in the languages section.

If languages are not mentioned, leave the languages array empty.

Never hallucinate information.

STRICT RULE:
- Never create or guess ANY project, certification, internship, achievement, or skill.
- If not present in User Answers → DO NOT include it in resume.
- Job Description is ONLY for formatting keywords, NOT for adding new content.
YOU ARE IN STRICT RESUME MODE.

RULES (VERY IMPORTANT):
- You are NOT allowed to add any new information.
- You are NOT allowed to assume skills, projects, internships, or certifications.
- You must ONLY use data explicitly present in USER INPUT JSON.
- If something is missing, REMOVE it completely.
- DO NOT hallucinate missing tools, skills, or technologies.
- DO NOT infer experience from job description.
-YOU have permission only upon if the details or any extra information given my user are unneccesary to the job discription also not
 required for any of resumes if it is unworthy not needed information then only you just remove that information to look resume 
 professional u can only do this

Organize sections intelligently.

Use sections:

1. Professional Summary

2. Technical Skills

3. Projects

4. Certifications

5. Internships

6. Achievements

7. Leadership Experience

8. Education
Education section must include:

1. Graduation
2. Intermediate / 12th
3. 10th

Never skip any education provided by user.

Use professional formatting.

Use bullet points.

Improve grammar.

Improve wording.

Make resume recruiter friendly.

If information is not provided,
completely remove that section.

Never create fake content.

Never assume skills,
projects,
internships,
certifications,
experience,
education,
or achievements.

Improve professionalism.

Improve ATS keyword optimization.

Remove duplicate information.

Improve grammar.

Improve sentence structure.

Convert rough user answers into professional
resume language.

Create ATS-friendly bullet points.

Do not use first person words like:
"I", "My", "Me".

Use action verbs such as:

- Developed
- Built
- Designed
- Implemented
- Created
- Optimized
- Collaborated
- Led

For projects:

Convert user project descriptions into
professional resume bullet points.

Example:

User Input:
"I created ai resume maker using flask"

Resume Output:
"Developed an AI-powered Resume Intelligence Platform using Flask, JavaScript, HTML, and CSS for dynamic resume generation and job-description-based personalization."

Return ONLY valid JSON.


{
  "personalInfo":{

    "name":"",
    "email":"",
    "phone":"",
    "location":"",

    "linkedin":"",
    "github":"",
    "portfolio":"",

    "leetcode":"",
    "hackerrank":"",
    "codechef":"",

    "photo":"",

    "title":"Software Developer"

},

  "summary":"",

  "skills":[
    {
      "name":"",
      "level":""
    }
  ],

  "projects":[
    {
      "title":"",
      "description":"",
      "technologies":[],
      "github":"",
      "live":""
    }
  ],

  "internships":[
    {
      "role":"",
      "company":"",
      "description":""
    }
  ],

  "certifications":[
    {
      "name":"",
      "platform":""
    }
  ],

  "achievements":[
    {
      "title":""
    }
  ],

  "leadership":[
    {
      "title":"",
      "description":""
    }
  ],

  "education":[
    {
      "degree":"",
      "institute":"",
      "cgpa":"",
      "year":""
    }
  ],

  "languages":[
    {
      "name":""
    }
  ]
}
  IMPORTANT:

Return education as:

education:[
{
degree:"",
institute:"",
cgpa:"",
year:""
}
]

Return certifications as:

certifications:[
{
name:"",
platform:""
}
]

Return internships as:

internships:[
{
role:"",
company:"",
description:""
}
]

Return projects as:

projects:[
{
title:"",
description:"",
technologies:[],
github:"",
live:""
}
]

Return achievements as:

achievements:[
{
title:""
}
]

Return leadership as:

leadership:[
{
title:"",
description:""
}
]

Return skills as:

skills:[
{
name:"",
level:""
}
]

Return languages as:

languages:[
{
name:"English"
}
]
`)

    const response = await result.response

const text = response.text()

const cleanText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim()

const parsedData = JSON.parse(cleanText)
parsedData.personalInfo = {
  ...parsedData.personalInfo,
  photo: wantPhoto === "Yes" ? profilePhoto : ""
}

console.log("PARSED RESUME DATA")
console.log(parsedData)

setResumeData(parsedData)

console.log("SETTING RESUME DATA")


localStorage.setItem(
  "savedResume",
  JSON.stringify(parsedData)
)

// pass fresh data directly
detectMissingInformation(parsedData)

await generateMatchAnalysis(parsedData)


  }

  catch(error){

  console.log(error)

  alert(
    "Resume generation failed"
  )

}
finally{

  setResumeLoading(false)

}

}

const improveResume = async (instruction) => {

  setChatLoading(true);

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(`

You are an expert Resume Writer.

Current Resume JSON:

${JSON.stringify(resumeData)}

Original Job Description:

${jobDescription}

User Request:

${instruction}

IMPORTANT RULES

You are modifying an existing resume.

Modify ONLY what the user requests.

Never invent:
- Skills
- Projects
- Certifications
- Internships
- Achievements
- Experience

Never change factual information.

Preserve the same JSON structure.

You may improve:
- Grammar
- Professional wording
- ATS keywords
- Formatting
- Bullet points
- Section ordering
- Resume length

SPECIAL COMMANDS

If the user says:

"Fit into one page"

OR

"One page resume"

THEN:

- Reduce unnecessary spacing.
- Make project descriptions shorter while preserving meaning.
- Keep the Professional Summary concise (3–4 lines).
- Merge short education information into compact lines.
- Keep certifications to one line each.
- Remove repeated wording.
- Keep all important content.
- Do NOT remove projects, skills, or achievements unless the user explicitly requests it.

If the user says:

"Reduce spacing"

→ Rewrite the content in a more compact style suitable for a one-page resume.

If the user says:

"Improve Summary"

→ Improve only the summary.

If the user says:

"Improve Projects"

→ Improve only the projects.

If the user says:

"Make ATS Friendly"

→ Improve wording using ATS keywords from the Job Description without inventing new information.

Return ONLY valid JSON.

`);

    const response = await result.response;

    const text = response.text();

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const updatedResume = JSON.parse(cleanText);

    setResumeData(updatedResume);
    setResume(
  JSON.stringify(updatedResume, null, 2)
);

    setResume(
      JSON.stringify(updatedResume, null, 2)
    );

    localStorage.setItem(
      "savedResume",
      JSON.stringify(updatedResume)
    );

    detectMissingInformation(updatedResume);

    await generateMatchAnalysis(updatedResume);

  }

  catch (error) {

    console.log(error);

    alert("Resume improvement failed");

  }

  finally{

    setChatLoading(false);

}

}

const regenerateResume = async () => {

  if (!resume) return

  setRegenerating(true)

  try {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      })

    const result =
      await model.generateContent(`

Current Resume:

${resume}

Job Description:

${jobDescription}

User Improvement Request:

${improvementPrompt}

You are an expert recruiter and ATS resume writer.

Modify ONLY the areas requested by the user.

Keep all existing information.

Do not invent projects.

Do not invent certifications.

Do not invent achievements.

Improve ATS optimization.

Improve formatting.

Return the complete updated resume.

Return ONLY valid JSON.

{
  "personalInfo": {},
  "summary": "",
  "skills": [],
  "projects": [],
  "certifications": [],
  "internships": [],
  "achievements": [],
  "leadership": [],
  "education": []
}
`)

    const response =
  await result.response

const text =
  response.text()

const cleanText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim()

const parsed = JSON.parse(cleanText)

setResumeData(parsed)

setResume(
  JSON.stringify(parsed, null, 2)
)
  }

  catch(error){

    console.log(error)

  }

  finally{

    setRegenerating(false)

  }

}
const generateMatchAnalysis = async (resumeData) => {

  try {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      })

    const result =
      await model.generateContent(`

Return ONLY valid JSON.

{
 "score":0,
 "missingSkills":[],
 "strongAreas":[],
 "suggestions":[],
 "learningRecommendations":[]
}

Job Description:

${jobDescription}

Selected Skills:

${JSON.stringify(selectedSkills)}

Resume Data:

${JSON.stringify(resumeData)}

Analyze resume match.

Calculate:

- Resume Match Score
- Missing Skills
- Strong Areas
- Suggestions

Return JSON only.

`)

    const response =
      await result.response

    const text =
      response.text()

    const cleanText =
      text
      .replace(/```json/g,"")
      .replace(/```/g,"")
      .trim()

    const parsedData =
      JSON.parse(cleanText)

    setMatchAnalysis(parsedData)
    setDashboard({
  matchScore: parsedData.score,
  missingSkills: parsedData.missingSkills.length,
  strongAreas: parsedData.strongAreas.length,
  suggestions: parsedData.suggestions.length,
  completeness: completenessScore,
  selectedSkills: selectedSkills.length
})

  }

  catch(error){

    console.log(error)

  }

}


const detectTemplateMissingFields = () => {

  let missing = []

  const config = resumeRequirements[resumeTemplate]

  if (!config) return []

  config.sections.forEach((section) => {

    if (
      section === "languages" &&
      !answers["Languages"]
    ) {
      missing.push({
        field: "Languages",
        question: "Please enter the languages you know."
      })
    }

    if (
      section === "professionalTitle" &&
      !answers["Professional Title"]
    ) {
      missing.push({
        field: "Professional Title",
        question: "Please enter your professional title."
      })
    }

    if (
      section === "interests" &&
      !answers["Interests"]
    ) {
      missing.push({
        field: "Interests",
        question: "Please enter your interests."
      })
    }

  })

  setMissingFields(missing)

  return missing

}

const getSkillLevels = (skill) => {

const lowerSkill =
skill.toLowerCase()

if(lowerSkill.includes("python")){

return [
"Basics",
"Intermediate",
"Strong",
"Advanced"
]

}

if(
lowerSkill.includes("sql") ||
lowerSkill.includes("mysql") ||
lowerSkill.includes("postgresql")
){

return [
"Basics",
"Intermediate",
"Query Optimization",
"Advanced"
]

}

if(lowerSkill.includes("flask")){

return [
"Beginner",
"Intermediate",
"Strong",
"Production Ready"
]

}

if(
lowerSkill.includes("dsa") ||
lowerSkill.includes("algorithm") ||
lowerSkill.includes("problem")
){

return [
"Basics",
"Problem Solving",
"Intermediate",
"Advanced"
]

}

return [
"Beginner",
"Intermediate",
"Strong",
"Advanced"
]

}
const detectMissingInformation = (resumeData) => {

  const missing = []

  if (!resumeData.personalInfo?.github) {
    missing.push("GitHub URL missing")
  }

  if (!resumeData.personalInfo?.linkedin) {
    missing.push("LinkedIn URL missing")
  }

  if (
    !resumeData.certifications ||
    resumeData.certifications.length === 0
  ) {
    missing.push("No certifications found")
  }

  if (
    !resumeData.internships ||
    resumeData.internships.length === 0
  ) {
    missing.push("No internship information found")
  }

  if (
    !resumeData.achievements ||
    resumeData.achievements.length === 0
  ) {
    missing.push("No achievements mentioned")
  }

  setMissingInfo(missing)

  const totalChecks = 5

  const score = Math.round(
    ((totalChecks - missing.length) / totalChecks) * 100
  )

  setCompletenessScore(score)

  setDashboard(prev => ({
    ...prev,
    completeness: score
  }))
}
  const renderList = (title, items, color) => (
    <div className={`${color} p-6 rounded-2xl mb-6`}>
      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <ul className="list-disc pl-6">
        {items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
const downloadPDF = async () => {

  const resumeElement =
    document.getElementById("resume-preview")

  if (!resumeElement) {

    alert("Resume Preview Not Found")

    return

  }

  const canvas = await html2canvas(resumeElement, {

  scale: 3,

  useCORS: true,

  backgroundColor: "#ffffff",

  logging: false,

  allowTaint: true,

  scrollX: 0,

  scrollY: -window.scrollY

})

  const imageData =
    canvas.toDataURL("image/png")

  const pdf = new jsPDF({

orientation:"portrait",

unit:"mm",

format:"a4",

compress:true

})

  const pdfWidth =
    pdf.internal.pageSize.getWidth()

  const pdfHeight =
    pdf.internal.pageSize.getHeight()

  const imageWidth =
    pdfWidth

  const imageHeight =
    (canvas.height * imageWidth) /
    canvas.width

  let heightLeft =
    imageHeight

  let position = 0

  pdf.addImage(
    imageData,
    "PNG",
    0,
    position,
    imageWidth,
    imageHeight
  )

  heightLeft -= pdfHeight

  while (heightLeft > 0) {

    position =
      heightLeft - imageHeight

    pdf.addPage()

    pdf.addImage(
      imageData,
      "PNG",
      0,
      position,
      imageWidth,
      imageHeight
    )

    heightLeft -= pdfHeight

  }

  const filename =
`${resumeData?.personalInfo?.name || "Resume"}_${resumeTemplate}.pdf`

pdf.save(filename)

}



  return (

    <div className="max-w-6xl mx-auto px-8 py-20">

      <div className="bg-white p-10 rounded-3xl shadow-2xl">

        <h2 className="text-4xl font-bold text-center mb-10">
          AI Job Description Analyzer
        </h2>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste Job Description Here..."
          className="w-full h-64 border border-gray-300 rounded-2xl p-5 mb-8"
        />

        <div className="text-center">

          <button
            onClick={analyzeJD}
            className="bg-black text-white px-10 py-4 rounded-2xl"
          >
            {loading ? "Analyzing..." : "Analyze JD"}
          </button>

        </div>
        {analysis && (
          <div className="mt-10">
            {renderList(
              "Skills",
              analysis.skills,
              "bg-blue-50"
            )}
 <div className="bg-cyan-50 p-6 rounded-2xl mb-6">
  <h3 className="text-2xl font-bold mb-4">
    Select Your Skills
  </h3>
  {analysis.skills?.map((skill, index) => (
    <div key={index} className="mb-6">
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={selectedSkills.includes(skill)}
          onChange={() => toggleSkill(skill)}
          className="mr-3"
        />
        {skill}
      </label>
      {selectedSkills.includes(skill) && (
        <div className="ml-8">
          <p className="font-semibold mb-2">
            {skill} Level
          </p>
          <select
            value={skillLevels[skill] || ""}
            onChange={(e) =>
              setSkillLevels({
                ...skillLevels,
                [skill]: e.target.value
              })
            }
            className="border rounded-lg p-2"
          >
            <option value="">
              Select Level
            </option>
            {getSkillLevels(skill).map(
(level,index)=>(

<option
key={index}
value={level}
>
{level}
</option>

)
)}
          </select>
        </div>
      )}
    </div>
  ))}
</div>
<div className="text-center mb-8">
  <button
    onClick={generateQuestions}
    className="bg-blue-600 text-white px-8 py-3 rounded-xl"
  >
    {questionLoading
      ? "Generating..."
      : "Generate Questions"}
  </button>
</div>
{Array.isArray(questions) && questions.length > 0 && (

  <div className="bg-indigo-50 p-6 rounded-2xl mb-6">
    <h3 className="text-2xl font-bold mb-4">
      AI Follow-Up Questions
    </h3>
   {questions.map((question,index)=>(

<div
key={index}
className="mb-4"
>

<p className="font-semibold mb-2">
{index+1}. {question}
</p>


<textarea
placeholder="Type your answer..."
className="w-full border rounded-xl p-3"
rows="3"
value={answers[question] || ""}
onChange={(e)=>
setAnswers({
 ...answers,
 [question]: e.target.value
})
}
/>

      </div>
    ))}
   
  </div>
)}
<div className="bg-yellow-50 p-6 rounded-2xl mb-6">

  <h3 className="text-2xl font-bold mb-4">
    Resume Template
  </h3>

  <select
    value={resumeTemplate}
    onChange={(e) => {

    setResumeTemplate(e.target.value)

    setCurrentTemplate(e.target.value)

}}
    className="border rounded-lg p-3"
  >

    <option value="ATS">
      ATS Resume
    </option>

    <option value="Modern">
      Modern Resume
    </option>

    <option value="Minimal">
      Minimal Resume
    </option>

    <option value="AI">
      Let AI Decide
    </option>

    <option value="Fresher">
  Fresher Resume
</option>


  </select>
  <div className="mt-6">

  <h3 className="text-xl font-semibold mb-3">
    Do you want to include a profile photo?
  </h3>

  <select
    value={wantPhoto}
    onChange={(e) => setWantPhoto(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option>No</option>
    <option>Yes</option>
  </select>

</div>
{wantPhoto === "Yes" && (

<div className="mt-5">

<h3 className="font-semibold mb-2">

Upload Profile Photo

</h3>

<input
type="file"
accept="image/*"
onChange={(e)=>{

const file=e.target.files[0]

if(file){

const reader=new FileReader()

reader.onload=()=>{

setProfilePhoto(reader.result)

}

reader.readAsDataURL(file)

}

}}
/>

</div>

)}
  
</div>

<div className="bg-blue-50 p-6 rounded-2xl mb-6">

<h3 className="text-2xl font-bold mb-4">
Resume Sections
</h3>

{Object.keys(sections).map((section) => (

<label key={section} className="block mb-2">

<input
type="checkbox"
checked={sections[section]}
onChange={() =>
setSections({
...sections,
[section]: !sections[section]
})
}
className="mr-3"
/>

{section}

</label>

))}

</div>

{Array.isArray(questions) && questions.length > 0 && (

  <div className="text-center mt-6">

    <button
  className="bg-green-600 text-white px-8 py-3 rounded-xl"
  onClick={generateResume}


>
  {
    resumeLoading
      ? "Generating Resume..."
      : "Generate Resume"
  }
</button>

  </div>

)}


{missingFields.length > 0 && (

<div className="bg-orange-50 p-6 rounded-2xl mt-8">

<h2 className="text-2xl font-bold mb-4">
Complete Missing Information
</h2>

<p className="mb-6 text-gray-700">
The selected resume format requires the following information.
</p>

{missingFields.map((item,index)=>(

<div key={index} className="mb-5">

<p className="font-semibold mb-2">
{item.question}
</p>

{item.field === "Upload Photo" ? (

<input
type="file"
accept="image/*"
className="w-full border rounded-xl p-3"
onChange={(e)=>{

const file = e.target.files[0]

if(file){

setAnswers({
...answers,
[item.field]:file
})

}

}}
/>

) : (

<input
type="text"
className="w-full border rounded-xl p-3"
placeholder={item.field}
value={answers[item.field] || ""}
onChange={(e)=>
setAnswers({
...answers,
[item.field]:e.target.value
})
}
/>

)}

</div>

))}

</div>

)}

{resumeData && (

<div
  id="resume-preview"
  className="mt-10"
  key={resumeTemplate}
>

<TemplateRenderer
  key={resumeTemplate}
  template={currentTemplate}
  resumeData={resumeData}
/>

</div>

)}

<AIResumeChat
    onSend={improveResume}
    loading={chatLoading}
/>
{resumeData && (

<div className="flex gap-4 mt-4 mb-4">

  

<button
onClick={downloadPDF}
className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>
Download PDF
</button>


</div>

)}
{dashboard && (

<div className="bg-slate-100 p-6 rounded-2xl mt-8">

<h2 className="text-3xl font-bold mb-6">
Resume Strength Dashboard
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Match Score</h3>
<p className="text-2xl font-bold">
  {dashboard.matchScore}%
</p>
</div>

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Completeness</h3>
<p>{dashboard.completeness}%</p>
</div>

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Skills Selected</h3>
<p>{dashboard.selectedSkills}</p>
</div>

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Missing Skills</h3>
<p>{dashboard.missingSkills}</p>
</div>

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Strong Areas</h3>
<p>{dashboard.strongAreas}</p>
</div>

<div className="bg-white p-4 rounded-xl">
<h3 className="font-bold">Suggestions</h3>
<p>{dashboard.suggestions}</p>
</div>

</div>

</div>

)}

{matchAnalysis && (

<div className="bg-green-50 p-6 rounded-2xl mt-8">

  <h2 className="text-3xl font-bold mb-4">
    Resume Match Analysis
  </h2>

  <p className="text-xl font-semibold mb-4">
    Match Score: {matchAnalysis.score}%
  </p>

  <h3 className="font-bold mt-4 mb-2">
    Missing Skills
  </h3>

  <ul className="list-disc pl-6">
    {matchAnalysis.missingSkills?.map(
      (skill,index)=>(

      <li key={index}>
        {skill}
      </li>

      )
    )}
  </ul>

  <h3 className="font-bold mt-4 mb-2">
    Strong Areas
  </h3>

  <ul className="list-disc pl-6">
    {matchAnalysis.strongAreas?.map(
      (item,index)=>(

      <li key={index}>
        {item}
      </li>

      )
    )}
  </ul>

  <h3 className="font-bold mt-4 mb-2">
    Suggestions
  </h3>

  <ul className="list-disc pl-6">
    {matchAnalysis.suggestions?.map(
      (item,index)=>(

      <li key={index}>
        {item}
      </li>

      )
    )}
  </ul>

  <h3 className="font-bold mt-4 mb-2">
  Learning Recommendations
</h3>

<ul className="list-disc pl-6">
  {matchAnalysis.learningRecommendations?.map(
    (item,index)=>(

    <li key={index}>
      {item}
    </li>

    )
  )}
</ul>

</div>

)}

<div className="bg-blue-50 p-6 rounded-2xl mt-8">

  <h2 className="text-2xl font-bold mb-3">
    Resume Completeness
  </h2>

  <p className="text-xl font-semibold">
    {completenessScore}%
  </p>

</div>
{missingInfo.length > 0 && (

<div className="bg-red-50 p-6 rounded-2xl mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Missing Information
  </h2>

  <ul className="list-disc pl-6">

    {missingInfo.map(
      (item,index)=>(

      <li key={index}>
        {item}
      </li>

      )
    )}

  </ul>

</div>

)}

            {renderList(
              "Technologies",
              analysis.technologies,
              "bg-green-50"
            )}
            {renderList(
              "Tools",
              analysis.tools,
              "bg-purple-50"
            )}
            {renderList(
              "ATS Keywords",
              analysis.keywords,
              "bg-yellow-50"
            )}
            {renderList(
              "Responsibilities",
              analysis.responsibilities,
              "bg-red-50"
            )}
            {renderList(
              "Soft Skills",
              analysis.softSkills,
              "bg-pink-50"
            )}
            {renderList(
              "Preferred Qualifications",
              analysis.preferredQualifications,
              "bg-orange-50"
            )}
            {renderList(
              "Resume Match Checklist",
              analysis.checklist,
              "bg-cyan-50"
            )}
            <div className="bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Experience Requirement
              </h3>
              <p>
                {analysis.experience}
              </p>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default JDAnalyzerAI