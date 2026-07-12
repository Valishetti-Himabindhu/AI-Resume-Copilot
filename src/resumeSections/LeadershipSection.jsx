function LeadershipSection({ leadership, template, styleConfig }) {

  if (!leadership || leadership.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Leadership Experience
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {leadership.map((item, index) => (

            <li key={index}>

              {typeof item === "object"
                ? item.title
                : item}

              {typeof item === "object" &&
                item.description && (
                  <p className="text-gray-700 mt-1">
                    {item.description}
                  </p>
              )}

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

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          Leadership Experience
        </h2>

        {leadership.map((item, index) => (

          <div
            key={index}
            className="mb-3 p-4 rounded-lg border shadow-sm"
          >

            <h3 className="text-lg font-semibold">

              {typeof item === "object"
                ? item.title
                : item}

            </h3>

            {typeof item === "object" &&
              item.description && (

              <p className="text-sm text-gray-700 mt-2 leading-6">
                {item.description}
              </p>

            )}

          </div>

        ))}

      </div>

    );

  }

  // ---------------- MINIMAL ----------------

  if (template === "Minimal") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-semibold border-b border-slate-500 pb-2 mb-3">
          Leadership
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {leadership.map((item, index) => (

            <li key={index}>

              {typeof item === "object"
                ? item.title
                : item}

              {typeof item === "object" &&
                item.description && (
                  <p className="text-gray-700 mt-1">
                    {item.description}
                  </p>
              )}

            </li>

          ))}

        </ul>

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
        Positions of Responsibility
      </h2>

      <ul className="list-disc pl-5 space-y-1 text-sm">

        {leadership.map((item, index) => (

          <li key={index}>

            {typeof item === "object"
              ? item.title
              : item}

            {typeof item === "object" &&
              item.description && (
                <p className="text-gray-700 mt-1">
                  {item.description}
                </p>
            )}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default LeadershipSection;