function EducationSection({ education, template, styleConfig }) {

  if (!education || education.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Education
        </h2>

        {education.map((edu, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-bold text-base">
              {edu.degree}
            </h3>

            <p className="text-sm">
              {edu.institute}
            </p>

            {(edu.cgpa || edu.year) && (

              <p className="text-sm text-gray-600">

                {edu.cgpa && `CGPA: ${edu.cgpa}`}
                {edu.cgpa && edu.year && " | "}
                {edu.year}

              </p>

            )}

            {edu.coursework && (

              <p className="text-sm text-gray-600">
                Coursework: {edu.coursework}
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
          Education
        </h2>

        {education.map((edu, index) => (

          <div
            key={index}
            className="mb-3 p-4 rounded-lg border shadow-sm"
          >

            <h3 className="text-lg font-semibold">
              {edu.degree}
            </h3>

            <p className="text-sm text-gray-700 mt-1">
              {edu.institute}
            </p>

            {(edu.cgpa || edu.year) && (

              <p className="text-sm text-gray-600 mt-1">

                {edu.cgpa && `CGPA: ${edu.cgpa}`}
                {edu.cgpa && edu.year && " | "}
                {edu.year}

              </p>

            )}

            {edu.coursework && (

              <p className="text-sm text-gray-600 mt-1">
                Coursework: {edu.coursework}
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
          Education
        </h2>

        {education.map((edu, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-semibold">
              {edu.degree}
            </h3>

            <p className="text-sm">
              {edu.institute}
            </p>

            {(edu.cgpa || edu.year) && (

              <p className="text-sm text-gray-600">

                {edu.cgpa && `CGPA: ${edu.cgpa}`}
                {edu.cgpa && edu.year && " | "}
                {edu.year}

              </p>

            )}

            {edu.coursework && (

              <p className="text-sm text-gray-600">
                Coursework: {edu.coursework}
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
        Education
      </h2>

      {education.map((edu, index) => (

        <div key={index} className="mb-3">

          <h3 className="font-semibold text-base">
            {edu.degree}
          </h3>

          <p className="text-sm">
            {edu.institute}
          </p>

          {(edu.cgpa || edu.year) && (

            <p className="text-sm text-gray-600">

              {edu.cgpa && `CGPA: ${edu.cgpa}`}
              {edu.cgpa && edu.year && " | "}
              {edu.year}

            </p>

          )}

          {edu.coursework && (

            <p className="text-sm text-gray-600">
              Coursework: {edu.coursework}
            </p>

          )}

        </div>

      ))}

    </div>

  );

}

export default EducationSection;