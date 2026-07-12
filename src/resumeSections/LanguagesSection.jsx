function LanguagesSection({ languages, template, styleConfig }) {

  if (!languages || languages.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Languages
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {languages.map((language, index) => (

            <li key={index}>

              {typeof language === "object"
                ? language.name
                : language}

            </li>

          ))}

        </ul>

      </div>

    );

  }

  // ---------------- MODERN ----------------

  if (template === "Modern") {

    return (

      <div className="mb-5">

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-4">
          Languages
        </h2>

        <div className="flex flex-wrap gap-2">

          {languages.map((language, index) => (

            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >

              {typeof language === "object"
                ? language.name
                : language}

            </span>

          ))}

        </div>

      </div>

    );

  }

  // ---------------- MINIMAL ----------------

  if (template === "Minimal") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-semibold border-b border-slate-500 pb-2 mb-3">
          Languages
        </h2>

        <p className="text-sm leading-6">

          {languages
            .map(language =>
              typeof language === "object"
                ? language.name
                : language
            )
            .join(" • ")}

        </p>

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
        Languages
      </h2>

      <ul className="list-disc pl-5 space-y-1 text-sm">

        {languages.map((language, index) => (

          <li key={index}>

            {typeof language === "object"
              ? language.name
              : language}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default LanguagesSection;