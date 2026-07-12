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

function FresherResume({ resumeData }) {

  if (!resumeData) return null;

  return (

    <div
      id="resume-preview"
      className="bg-white w-[210mm] min-h-[297mm] mx-auto p-8 shadow-xl"
    >

      <PersonalInfoSection
        personalInfo={resumeData.personalInfo}
        template="Fresher"
      />

      <SummarySection
        summary={resumeData.summary}
        template="Fresher"
      />

      <EducationSection
        education={resumeData.education}
        template="Fresher"
      />

      <SkillsSection
        skills={resumeData.skills}
        template="Fresher"
      />

      <ProjectsSection
        projects={resumeData.projects}
        template="Fresher"
      />

      <InternshipSection
        internships={resumeData.internships}
        template="Fresher"
      />

      <CertificationSection
        certifications={resumeData.certifications}
        template="Fresher"
      />

      <AchievementSection
        achievements={resumeData.achievements}
        template="Fresher"
      />

      <LeadershipSection
        leadership={resumeData.leadership}
        template="Fresher"
      />

      <CodingProfilesSection
        personalInfo={resumeData.personalInfo}
        template="Fresher"
      />

      <LanguagesSection
        languages={resumeData.languages}
        template="Fresher"
      />

    </div>

  );

}

export default FresherResume;