import DynamicPersonalInfo from "../dynamicSections/DynamicPersonalInfo";
import DynamicSummary from "../dynamicSections/DynamicSummary";
import DynamicSkills from "../dynamicSections/DynamicSkills";
import DynamicProjects from "../dynamicSections/DynamicProjects";
import DynamicEducation from "../dynamicSections/DynamicEducation";
import DynamicCertification from "../dynamicSections/DynamicCertification";
import DynamicAchievement from "../dynamicSections/DynamicAchievement";
import DynamicLeadership from "../dynamicSections/DynamicLeadership";
import DynamicLanguages from "../dynamicSections/DynamicLanguages";
import DynamicCodingProfiles from "../dynamicSections/DynamicCodingProfiles";
import DynamicInternship from "../dynamicSections/DynamicInternship";
import { buildTemplateStyle } from "../../utils/templateStyles";


function DynamicResume({ resumeData, templateAnalysis }) {
    const styleConfig = buildTemplateStyle(templateAnalysis);

  if (!resumeData) return null;

  const components = {

    "Professional Title": (
      <DynamicPersonalInfo
        personalInfo={resumeData.personalInfo}
styleConfig={styleConfig}      />
    ),

    Contact: (
      <DynamicPersonalInfo
        personalInfo={resumeData.personalInfo}
        styleConfig={styleConfig}
      />
    ),

    Photo: (
      <DynamicPersonalInfo
        personalInfo={resumeData.personalInfo}
        styleConfig={styleConfig}
      />
    ),

    Summary: (
      <DynamicSummary
        summary={resumeData.summary}
        styleConfig={styleConfig}
      />
    ),

    "Professional Summary": (
      <DynamicSummary
        summary={resumeData.summary}
        styleConfig={styleConfig}
      />
    ),

    Skills: (
      <DynamicSkills
        skills={resumeData.skills}
       styleConfig={styleConfig}
      />
    ),

    "Technical Skills": (
      <DynamicSkills
        skills={resumeData.skills}
        styleConfig={styleConfig}
      />
    ),

    Projects: (
      <DynamicProjects
        projects={resumeData.projects}
        styleConfig={styleConfig}
      />
    ),

    "Project Experience": (
      <DynamicProjects
        projects={resumeData.projects}
        styleConfig={styleConfig}
      />
    ),

    Internships: (
      <DynamicInternship
        internships={resumeData.internships}
        styleConfig={styleConfig}
      />
    ),

    "Work Experience": (
      <DynamicInternship
        internships={resumeData.internships}
        styleConfig={styleConfig}
      />
    ),

    Certifications: (
      <DynamicCertification
        certifications={resumeData.certifications}
        styleConfig={styleConfig}
      />
    ),

    Achievements: (
      <DynamicAchievement
        achievements={resumeData.achievements}
        styleConfig={styleConfig}
      />
    ),

    Leadership: (
      <DynamicLeadership
        leadership={resumeData.leadership}
        styleConfig={styleConfig}
      />
    ),

    Education: (
      <DynamicEducation
        education={resumeData.education}
        styleConfig={styleConfig}
      />
    ),

    Languages: (
      <DynamicLanguages
        languages={resumeData.languages}
        styleConfig={styleConfig}
      />
    ),

    "Professional Profiles": (
      <DynamicCodingProfiles
        personalInfo={resumeData.personalInfo}
        styleConfig={styleConfig}
      />
    ),

    GitHub: (
      <DynamicCodingProfiles
        personalInfo={resumeData.personalInfo}
        styleConfig={styleConfig}
      />
    ),

    LinkedIn: (
      <DynamicCodingProfiles
        personalInfo={resumeData.personalInfo}
        styleConfig={styleConfig}
      />
    )

  };

  const isDoubleColumn =
    templateAnalysis?.columns?.toLowerCase() === "double";

  return (

    <div
      id="resume-preview"
      className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl"
    >

      {isDoubleColumn ? (

        <div className="grid grid-cols-3">

          {/* LEFT SIDEBAR */}

          <div className="bg-slate-100 p-6">

            {templateAnalysis?.sectionOrder?.map((section, index) => {

              if (
                [
                  "Photo",
                  "Professional Title",
                  "Contact",
                  "Skills",
                  "Technical Skills",
                  "Languages",
                  "Professional Profiles",
                  "GitHub",
                  "LinkedIn",
                  "Certifications"
                ].includes(section)
              ) {

                return (
                  <div key={index}>
                    {components[section]}
                  </div>
                );

              }

              return null;

            })}

          </div>

          {/* RIGHT CONTENT */}

          <div className="col-span-2 p-8">

            {templateAnalysis?.sectionOrder?.map((section, index) => {

              if (
                [
                  "Summary",
                  "Professional Summary",
                  "Projects",
                  "Project Experience",
                  "Work Experience",
                  "Internships",
                  "Education",
                  "Achievements",
                  "Leadership"
                ].includes(section)
              ) {

                return (
                  <div key={index}>
                    {components[section]}
                  </div>
                );

              }

              return null;

            })}

          </div>

        </div>

      ) : (

        <div className="p-8">

          {templateAnalysis?.sectionOrder?.length > 0 ? (

            templateAnalysis.sectionOrder.map((section, index) => (

              <div key={index}>

                {components[section] || null}

              </div>

            ))

          ) : (

            <>

              <DynamicPersonalInfo
                personalInfo={resumeData.personalInfo}
                styleConfig={styleConfig}
              />

              <DynamicSummary
                summary={resumeData.summary}
                styleConfig={styleConfig}
              />

              <DynamicSkills
                skills={resumeData.skills}
                styleConfig={styleConfig}
              />

              <DynamicProjects
                projects={resumeData.projects}
                styleConfig={styleConfig}
              />

              <DynamicInternship
                internships={resumeData.internships}
                styleConfig={styleConfig}
              />

              <DynamicCertification
                certifications={resumeData.certifications}
                styleConfig={styleConfig}
              />

              <DynamicAchievement
                achievements={resumeData.achievements}
                styleConfig={styleConfig}
              />

              <DynamicLeadership
                leadership={resumeData.leadership}
                styleConfig={styleConfig}
              />

              <DynamicEducation
                education={resumeData.education}
                styleConfig={styleConfig}
              />

              <DynamicLanguages
                languages={resumeData.languages}
                styleConfig={styleConfig}
              />

              <DynamicCodingProfiles
                personalInfo={resumeData.personalInfo}
                styleConfig={styleConfig}
              />

            </>

          )}

        </div>

      )}

    </div>

  );

}

export default DynamicResume;