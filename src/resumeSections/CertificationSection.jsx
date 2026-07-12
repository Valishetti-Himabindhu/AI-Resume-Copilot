function CertificationSection({ certifications, template, styleConfig }) {

  if (!certifications || certifications.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Certifications
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {certifications.map((cert, index) => (

            <li key={index}>

              <strong>
                {typeof cert === "object"
                  ? cert.name
                  : cert}
              </strong>

              {typeof cert === "object" && cert.platform && (
                <> — {cert.platform}</>
              )}

              {typeof cert === "object" && cert.year && (
                <> ({cert.year})</>
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
          Certifications
        </h2>

        <div className="grid gap-3">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="border rounded-lg shadow-sm p-3"
            >

              <h3 className="font-semibold text-base">

                {typeof cert === "object"
                  ? cert.name
                  : cert}

              </h3>

              {typeof cert === "object" && cert.platform && (

                <p className="text-sm text-gray-700 mt-1">
                  {cert.platform}
                </p>

              )}

              {typeof cert === "object" && cert.year && (

                <p className="text-sm text-gray-500">
                  {cert.year}
                </p>

              )}

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

        <h2 className="text-xl font-semibold border-b border-slate-500 pb-2 mb-3">
          Certifications
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {certifications.map((cert, index) => (

            <li key={index}>

              {typeof cert === "object"
                ? cert.name
                : cert}

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
        Certifications
      </h2>

      <ul className="list-disc pl-5 space-y-1 text-sm">

        {certifications.map((cert, index) => (

          <li key={index}>

            <strong>

              {typeof cert === "object"
                ? cert.name
                : cert}

            </strong>

            {typeof cert === "object" && cert.platform && (
              <> — {cert.platform}</>
            )}

            {typeof cert === "object" && cert.year && (
              <> ({cert.year})</>
            )}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default CertificationSection;