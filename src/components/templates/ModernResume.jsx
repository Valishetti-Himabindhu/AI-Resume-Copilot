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

function ModernResume({ resumeData }) {
  if (!resumeData) return null;

  return (
    <div
      id="resume-preview"
      className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl"
    >
      <div className="flex">

        {/* LEFT SIDEBAR */}
        <div className="w-[32%] bg-slate-100 p-6 flex flex-col gap-5">

          <PersonalInfoSection
            personalInfo={resumeData.personalInfo}
            template="Modern"
          />

          <SkillsSection
            skills={resumeData.skills}
            template="Modern"
          />

          <LanguagesSection
            languages={resumeData.languages}
            template="Modern"
          />

          <CodingProfilesSection
            personalInfo={resumeData.personalInfo}
            template="Modern"
          />

          <CertificationSection
            certifications={resumeData.certifications}
            template="Modern"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[68%] p-8 flex flex-col gap-5">

          <SummarySection
            summary={resumeData.summary}
            template="Modern"
          />

          <ProjectsSection
            projects={resumeData.projects}
            template="Modern"
          />

          <InternshipSection
            internships={resumeData.internships}
            template="Modern"
          />

          <AchievementSection
            achievements={resumeData.achievements}
            template="Modern"
          />

          <LeadershipSection
            leadership={resumeData.leadership}
            template="Modern"
          />

          <EducationSection
            education={resumeData.education}
            template="Modern"
          />

        </div>

      </div>
    </div>
  );
}

export default ModernResume;