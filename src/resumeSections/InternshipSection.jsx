function InternshipSection({ internships, template, styleConfig }) {

  if (!internships || internships.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Internships
        </h2>

        {internships.map((internship, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-bold text-base">
              {internship.role}
            </h3>

            {internship.company && (
              <p className="text-sm">
                {internship.company}
              </p>
            )}

            {internship.duration && (
              <p className="text-sm text-gray-600">
                {internship.duration}
              </p>
            )}

            {Array.isArray(internship.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm mt-1">

                {internship.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6 mt-1">
                {internship.description}
              </p>

            )}

          </div>

        ))}

      </div>

    );

  }

  // ---------------- MODERN ----------------

  if (template === "Modern") {

    return (

      <div className="mb-5">

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          Internships
        </h2>

        {internships.map((internship, index) => (

          <div
            key={index}
            className="mb-3 p-4 rounded-lg border shadow-sm"
          >

            <h3 className="text-lg font-semibold">
              {internship.role}
            </h3>

            {internship.company && (
              <p className="text-sm text-gray-700 mt-1">
                {internship.company}
              </p>
            )}

            {internship.duration && (
              <p className="text-sm text-gray-500 mb-2">
                {internship.duration}
              </p>
            )}

            {Array.isArray(internship.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm">

                {internship.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6 text-gray-700">
                {internship.description}
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
          Internships
        </h2>

        {internships.map((internship, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-semibold">
              {internship.role}
            </h3>

            {internship.company && (
              <p className="text-sm">
                {internship.company}
              </p>
            )}

            {internship.duration && (
              <p className="text-sm text-gray-600">
                {internship.duration}
              </p>
            )}

            {Array.isArray(internship.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm mt-1">

                {internship.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6 mt-1">
                {internship.description}
              </p>

            )}

          </div>

        ))}

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
        Internships
      </h2>

      {internships.map((internship, index) => (

        <div key={index} className="mb-3">

          <h3 className="font-semibold text-base">
            {internship.role}
          </h3>

          {internship.company && (
            <p className="text-sm">
              {internship.company}
            </p>
          )}

          {internship.duration && (
            <p className="text-sm text-gray-600">
              {internship.duration}
            </p>
          )}

          {Array.isArray(internship.description) ? (

            <ul className="list-disc pl-5 space-y-0.5 text-sm mt-1">

              {internship.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}

            </ul>

          ) : (

            <p className="text-sm leading-6 mt-1">
              {internship.description}
            </p>

          )}

        </div>

      ))}

    </div>

  );

}

export default InternshipSection;