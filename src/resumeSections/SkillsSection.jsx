function SkillsSection({ skills, template, styleConfig }) {

  if (!skills || skills.length === 0) return null;

  const skillList = skills.map((skill) =>
    typeof skill === "object"
      ? skill.name
      : skill
  );

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-2">
          Technical Skills
        </h2>

        <p className="text-sm leading-6">
          {skillList.join(" • ")}
        </p>

      </div>

    );

  }

  // ---------------- MODERN ----------------

  if (template === "Modern") {

    return (

      <div className="mb-5">

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-4">
          Technical Skills
        </h2>

        <div className="flex flex-wrap gap-2">

          {skillList.map((skill, index) => (

            <div
              key={index}
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>

    );

  }

  // ---------------- MINIMAL ----------------

  if (template === "Minimal") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-semibold border-b-2 border-slate-500 pb-2 mb-3">
          Skills
        </h2>

        <p className="text-sm leading-6">
          {skillList.join(" • ")}
        </p>

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
        Technical Skills
      </h2>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc pl-6 text-sm">

        {skillList.map((skill, index) => (

          <li key={index}>
            {skill}
          </li>

        ))}

      </ul>

    </div>

  );

}

export default SkillsSection;