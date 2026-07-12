function AchievementSection({ achievements, template, styleConfig }) {

  if (!achievements || achievements.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-bold border-b-2 border-slate-700 pb-2 mb-4">
          Achievements
        </h2>

        <ul className="list-disc pl-6">

          {achievements.map((item, index) => (

            <li key={index} className="mb-2">

              {typeof item === "object"
                ? item.title
                : item}

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

        <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">
          Achievements
        </h2>

        <div className="grid gap-4">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl p-4 shadow-sm"
            >

              <p className="font-medium">

                {typeof item === "object"
                  ? item.title
                  : item}

              </p>

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

        <h2 className="text-xl font-semibold mb-3">
          Achievements
        </h2>

        <ul className="list-disc pl-6">

          {achievements.map((item, index) => (

            <li key={index}>

              {typeof item === "object"
                ? item.title
                : item}

            </li>

          ))}

        </ul>

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b-2 border-slate-700 pb-2 mb-4">
        Achievements
      </h2>

      <ul className="list-disc pl-6">

        {achievements.map((item, index) => (

          <li key={index} className="mb-2">

            {typeof item === "object"
              ? item.title
              : item}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default AchievementSection;