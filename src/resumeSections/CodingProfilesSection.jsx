function CodingProfilesSection({ personalInfo, template, styleConfig }) {

  if (
    !personalInfo?.github &&
    !personalInfo?.portfolio &&
    !personalInfo?.linkedin &&
    !personalInfo?.leetcode &&
    !personalInfo?.hackerrank &&
    !personalInfo?.codechef
  ) {
    return null;
  }

  // ---------------- ATS ----------------

  if (template === "ATS") {

    return (

      <div className="mb-4">

        <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
          Professional Profiles
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {personalInfo.linkedin && (
            <li>
              <strong>LinkedIn:</strong> {personalInfo.linkedin}
            </li>
          )}

          {personalInfo.github && (
            <li>
              <strong>GitHub:</strong> {personalInfo.github}
            </li>
          )}

          {personalInfo.portfolio && (
            <li>
              <strong>Portfolio:</strong> {personalInfo.portfolio}
            </li>
          )}

          {personalInfo.leetcode && (
            <li>
              <strong>LeetCode:</strong> {personalInfo.leetcode}
            </li>
          )}

          {personalInfo.hackerrank && (
            <li>
              <strong>HackerRank:</strong> {personalInfo.hackerrank}
            </li>
          )}

          {personalInfo.codechef && (
            <li>
              <strong>CodeChef:</strong> {personalInfo.codechef}
            </li>
          )}

        </ul>

      </div>

    );

  }

  // ---------------- MODERN ----------------

  if (template === "Modern") {

    return (

      <div className="mb-5">

        <h2 className="text-2xl font-bold border-b-2 border-slate-500 pb-2 mb-3">
          Professional Profiles
        </h2>

        <div className="grid gap-3">

          {personalInfo.linkedin && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">LinkedIn</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.linkedin}
              </p>
            </div>
          )}

          {personalInfo.github && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">GitHub</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.github}
              </p>
            </div>
          )}

          {personalInfo.portfolio && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">Portfolio</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.portfolio}
              </p>
            </div>
          )}

          {personalInfo.leetcode && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">LeetCode</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.leetcode}
              </p>
            </div>
          )}

          {personalInfo.hackerrank && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">HackerRank</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.hackerrank}
              </p>
            </div>
          )}

          {personalInfo.codechef && (
            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="font-semibold text-base">CodeChef</h3>
              <p className="text-sm text-gray-700 break-all">
                {personalInfo.codechef}
              </p>
            </div>
          )}

        </div>

      </div>

    );

  }

  // ---------------- MINIMAL ----------------

  if (template === "Minimal") {

    return (

      <div className="mb-5">

        <h2 className="text-xl font-semibold border-b border-slate-500 pb-2 mb-3">
          Profiles
        </h2>

        <ul className="list-disc pl-5 space-y-1 text-sm">

          {personalInfo.linkedin && (
            <li>{personalInfo.linkedin}</li>
          )}

          {personalInfo.github && (
            <li>{personalInfo.github}</li>
          )}

          {personalInfo.portfolio && (
            <li>{personalInfo.portfolio}</li>
          )}

          {personalInfo.leetcode && (
            <li>{personalInfo.leetcode}</li>
          )}

          {personalInfo.hackerrank && (
            <li>{personalInfo.hackerrank}</li>
          )}

          {personalInfo.codechef && (
            <li>{personalInfo.codechef}</li>
          )}

        </ul>

      </div>

    );

  }

  // ---------------- FRESHER ----------------

  return (

    <div className="mb-5">

      <h2 className="text-xl font-bold border-b border-slate-500 pb-2 mb-3">
        Coding Profiles
      </h2>

      <ul className="list-disc pl-5 space-y-1 text-sm">

        {personalInfo.github && (
          <li><strong>GitHub:</strong> {personalInfo.github}</li>
        )}

        {personalInfo.leetcode && (
          <li><strong>LeetCode:</strong> {personalInfo.leetcode}</li>
        )}

        {personalInfo.hackerrank && (
          <li><strong>HackerRank:</strong> {personalInfo.hackerrank}</li>
        )}

        {personalInfo.codechef && (
          <li><strong>CodeChef:</strong> {personalInfo.codechef}</li>
        )}

        {personalInfo.linkedin && (
          <li><strong>LinkedIn:</strong> {personalInfo.linkedin}</li>
        )}

        {personalInfo.portfolio && (
          <li><strong>Portfolio:</strong> {personalInfo.portfolio}</li>
        )}

      </ul>

    </div>

  );

}

export default CodingProfilesSection;