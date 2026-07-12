function SummarySection({
  summary,
  template,
  styleConfig
}) {

  if (!summary || summary.trim() === "") return null;

  const heading =
    template === "Fresher"
      ? "Career Objective"
      : "Professional Summary";

  // ATS
  if (template === "ATS") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          {heading}
        </h2>

        <p className="leading-7 text-justify">
          {summary}
        </p>

      </div>

    );

  }

  // Modern
  if (template === "Modern") {

    return (

      <div className="mb-5">

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          {heading}
        </h2>

        <p className="leading-6 text-gray-700 text-justify">
          {summary}
        </p>

      </div>

    );

  }

  // Minimal
  if (template === "Minimal") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-semibold border-b-2 border-slate-500 pb-2 mb-3">
          {heading}
        </h2>

        <p className="leading-7 text-justify">
          {summary}
        </p>

      </div>

    );

  }

  // Fresher
  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
        {heading}
      </h2>

      <p className="leading-7 text-justify">
        {summary}
      </p>

    </div>

  );

}

export default SummarySection;