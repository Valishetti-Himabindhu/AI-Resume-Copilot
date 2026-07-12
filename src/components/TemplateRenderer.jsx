import ATSResume from "./templates/ATSResume";
import ModernResume from "./templates/ModernResume";
import MinimalResume from "./templates/MinimalResume";
import FresherResume from "./templates/FresherResume";

function TemplateRenderer({

  template,

  resumeData

}) {

  if (!resumeData) return null;

  switch (template) {

    case "Modern":
      return <ModernResume resumeData={resumeData} />;

    case "Minimal":
      return <MinimalResume resumeData={resumeData} />;

    case "Fresher":
      return <FresherResume resumeData={resumeData} />;

    case "AI":
      // For now AI Recommended uses ATS.
      // Later we can make AI automatically choose the best template.
      return <ATSResume resumeData={resumeData} />;

    case "ATS":
    default:
      return <ATSResume resumeData={resumeData} />;

  }

}

export default TemplateRenderer;