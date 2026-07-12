function ProjectsSection({ projects, template, styleConfig }) {

  if (!projects || projects.length === 0) return null;

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          Projects
        </h2>

        {projects.map((project, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-bold text-base">
              {project.title}
            </h3>

            {project.technologies?.length > 0 && (

              <p className="text-sm text-gray-700 mb-1">

                <span className="font-semibold">
                  Technologies:
                </span>{" "}

                {project.technologies.join(" | ")}

              </p>

            )}

            {Array.isArray(project.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm">

                {project.description.map((point, i) => (

                  <li key={i}>{point}</li>

                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6 text-justify">

                {project.description}

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
          Projects
        </h2>

        {projects.map((project, index) => (

          <div
            key={index}
            className="mb-3 p-4 rounded-lg border shadow-sm"
          >

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            {project.technologies?.length > 0 && (

              <p className="text-sm text-gray-600 mt-1 mb-2">

                <span className="font-semibold">
                  Technologies:
                </span>{" "}

                {project.technologies.join(" | ")}

              </p>

            )}

            {Array.isArray(project.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm">

                {project.description.map((point, i) => (

                  <li key={i}>{point}</li>

                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6 text-gray-700">

                {project.description}

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

        <h2 className="text-xl font-semibold border-b-2 border-slate-500 pb-2 mb-3">
          Projects
        </h2>

        {projects.map((project, index) => (

          <div key={index} className="mb-3">

            <h3 className="font-semibold">
              {project.title}
            </h3>

            {project.technologies?.length > 0 && (

              <p className="text-sm text-gray-700 mb-1">

                <span className="font-semibold">
                  Technologies:
                </span>{" "}

                {project.technologies.join(" | ")}

              </p>

            )}

            {Array.isArray(project.description) ? (

              <ul className="list-disc pl-5 space-y-0.5 text-sm">

                {project.description.map((point, i) => (

                  <li key={i}>{point}</li>

                ))}

              </ul>

            ) : (

              <p className="text-sm leading-6">

                {project.description}

              </p>

            )}

          </div>

        ))}

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-4">

      <h2 className="text-xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
        Academic Projects
      </h2>

      {projects.map((project, index) => (

        <div key={index} className="mb-3">

          <h3 className="font-semibold text-base">
            {project.title}
          </h3>

          {project.technologies?.length > 0 && (

            <p className="text-sm text-gray-700 mb-1">

              <span className="font-semibold">
                Technologies:
              </span>{" "}

              {project.technologies.join(" | ")}

            </p>

          )}

          {Array.isArray(project.description) ? (

            <ul className="list-disc pl-5 space-y-0.5 text-sm">

              {project.description.map((point, i) => (

                <li key={i}>
                  {point}
                </li>

              ))}

            </ul>

          ) : (

            <p className="text-sm leading-6">

              {project.description}

            </p>

          )}

        </div>

      ))}

    </div>

  );

}

export default ProjectsSection;