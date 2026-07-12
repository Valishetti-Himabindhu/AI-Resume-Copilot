import PersonalInfoSection from "../../resumeSections/PersonalInfoSection";
import SummarySection from "../../resumeSections/SummarySection";
import SkillsSection from "../../resumeSections/SkillsSection";
import ProjectsSection from "../../resumeSections/ProjectsSection";
import InternshipSection from "../../resumeSections/InternshipSection";
import CertificationSection from "../../resumeSections/CertificationSection";
import AchievementSection from "../../resumeSections/AchievementSection";
import LeadershipSection from "../../resumeSections/LeadershipSection";
import EducationSection from "../../resumeSections/EducationSection";
import LanguagesSection from "../../resumeSections/LanguagesSection";
import CodingProfilesSection from "../../resumeSections/CodingProfilesSection";
function ATSResume({ resumeData }) {

  if (!resumeData) return null;

  return (

  
<div
  id="resume-preview"
  className="bg-white w-[210mm] min-h-[297mm] h-auto mx-auto shadow-xl"
> 

      <PersonalInfoSection
        personalInfo={resumeData.personalInfo}
        template="ATS"
      />

      <SummarySection
        summary={resumeData.summary}
        template="ATS"
      />

      <SkillsSection
        skills={resumeData.skills}
        template="ATS"
      />

      <ProjectsSection
        projects={resumeData.projects}
        template="ATS"
      />

      <InternshipSection
        internships={resumeData.internships}
        template="ATS"
      />

      <CertificationSection
        certifications={resumeData.certifications}
        template="ATS"
      />

      <AchievementSection
        achievements={resumeData.achievements}
        template="ATS"
      />

      <LeadershipSection
        leadership={resumeData.leadership}
        template="ATS"
      />

      <EducationSection
        education={resumeData.education}
        template="ATS"
      />

      <LanguagesSection
        languages={resumeData.languages}
        template="ATS"
      />

      <CodingProfilesSection
        personalInfo={resumeData.personalInfo}
        template="ATS"
      />

    </div>

  );

}

export default ATSResume;