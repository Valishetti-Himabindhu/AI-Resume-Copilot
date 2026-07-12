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

function MinimalResume({ resumeData }) {

  if (!resumeData) return null;

  return (

    <div
      id="resume-preview"
      className="bg-white w-[210mm] min-h-[297mm] mx-auto p-8 shadow-lg text-black"
    >

      <PersonalInfoSection
        personalInfo={resumeData.personalInfo}
        template="Minimal"
      />

      <SummarySection
        summary={resumeData.summary}
        template="Minimal"
      />

      <SkillsSection
        skills={resumeData.skills}
        template="Minimal"
      />

      <ProjectsSection
        projects={resumeData.projects}
        template="Minimal"
      />

      <InternshipSection
        internships={resumeData.internships}
        template="Minimal"
      />

      <CertificationSection
        certifications={resumeData.certifications}
        template="Minimal"
      />

      <AchievementSection
        achievements={resumeData.achievements}
        template="Minimal"
      />

      <LeadershipSection
        leadership={resumeData.leadership}
        template="Minimal"
      />

      <EducationSection
        education={resumeData.education}
        template="Minimal"
      />

      <LanguagesSection
        languages={resumeData.languages}
        template="Minimal"
      />

      <CodingProfilesSection
        personalInfo={resumeData.personalInfo}
        template="Minimal"
      />

    </div>

  );

}

export default MinimalResume;