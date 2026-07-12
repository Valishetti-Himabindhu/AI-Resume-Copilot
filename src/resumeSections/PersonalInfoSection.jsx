function PersonalInfoSection({ personalInfo, template }) {

  if (!personalInfo) return null;

  const {
    name,
    title,
    email,
    phone,
    location,
    linkedin,
    github,
    portfolio,
    photo
  } = personalInfo;

  // ================= ATS =================

  if (template === "ATS") {

    return (

      <div className="mb-4 flex items-start gap-4">

        {photo && (
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded object-cover border border-gray-300"
          />
        )}

        <div className="flex-1">

          <h1 className="text-[28px] font-bold text-center leading-tight">
            {name}
          </h1>

          {title && (
            <p className="text-center text-sm text-gray-600 mt-1">
              {title}
            </p>
          )}

          <p className="text-center text-[13px] mt-2">

            {phone}

            {email && ` | ${email}`}

            {location && ` | ${location}`}

          </p>

          <p className="text-center text-[13px] mt-1">

            {linkedin}

            {github && ` | ${github}`}

            {portfolio && ` | ${portfolio}`}

          </p>

          <hr className="mt-3 border-0 h-[2px] bg-slate-600" />

        </div>

      </div>

    );

  }

  // ================= MODERN =================

  if (template === "Modern") {

    return (

      <div className="mb-5 text-center">

        {photo && (

          <div className="flex justify-center mb-3">

            <img
              src={photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />

          </div>

        )}

        <h1 className="text-3xl font-bold">
          {name}
        </h1>

        {title && (
          <p className="text-gray-600 text-base mt-1">
            {title}
          </p>
        )}

        <p className="text-sm mt-3">

          {phone}

          {email && ` | ${email}`}

          {location && ` | ${location}`}

        </p>

        <p className="text-sm mt-1">

          {linkedin}

          {github && ` | ${github}`}

          {portfolio && ` | ${portfolio}`}

        </p>

        <hr className="mt-4 border-0 h-[2px] bg-slate-600" />

      </div>

    );

  }

  // ================= MINIMAL =================

  if (template === "Minimal") {

    return (

      <div className="mb-4 flex gap-4">

        {photo && (

          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded object-cover border border-gray-300"
          />

        )}

        <div className="flex-1">

          <h1 className="text-3xl font-semibold">
            {name}
          </h1>

          {title && (
            <p className="text-sm text-gray-600 mt-1">
              {title}
            </p>
          )}

          <p className="text-[13px] mt-2">

            {phone}

            {email && ` | ${email}`}

            {location && ` | ${location}`}

          </p>

          <p className="text-[13px] mt-1">

            {linkedin}

            {github && ` | ${github}`}

            {portfolio && ` | ${portfolio}`}

          </p>

          <hr className="mt-3 border-0 h-[2px] bg-slate-600" />

        </div>

      </div>

    );

  }

  // ================= FRESHER =================

  if (template === "Fresher") {

    return (

      <div className="mb-4 flex gap-4">

        {photo && (

          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded object-cover border border-gray-300"
          />

        )}

        <div className="flex-1">

          <h1 className="text-3xl font-bold">
            {name}
          </h1>

          {title && (
            <p className="text-sm text-gray-600 mt-1">
              {title}
            </p>
          )}

          <p className="text-[13px] mt-2">

            {phone}

            {email && ` | ${email}`}

            {location && ` | ${location}`}

          </p>

          <p className="text-[13px] mt-1">

            {linkedin}

            {github && ` | ${github}`}

            {portfolio && ` | ${portfolio}`}

          </p>

          <hr className="mt-3 border-0 h-[2px] bg-slate-600" />

        </div>

      </div>

    );

  }

  // ================= DEFAULT =================

  return (

    <div className="mb-4">

      <h1 className="text-3xl font-bold">
        {name}
      </h1>

      {title && (
        <p className="text-sm text-gray-600 mt-1">
          {title}
        </p>
      )}

      <p className="text-[13px] mt-2">

        {phone}

        {email && ` | ${email}`}

        {location && ` | ${location}`}

      </p>

      <p className="text-[13px] mt-1">

        {linkedin}

        {github && ` | ${github}`}

        {portfolio && ` | ${portfolio}`}

      </p>

      <hr className="mt-3 border-0 h-[2px] bg-slate-600" />

    </div>

  );

}

export default PersonalInfoSection;