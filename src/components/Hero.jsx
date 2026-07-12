function Hero() {
  return (

    <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
      <div>

        <h1 className="text-6xl font-bold leading-tight">
          Build Smarter
          <br />
          ATS-Friendly
          <br />
          AI Resumes
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          AI-powered resume intelligence platform for
          students, freshers, internships, and placements.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-black text-white px-6 py-3 rounded-2xl">
            Start Building
          </button>

          

        </div>

      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Resume Match Analysis
        </h2>

        <div className="flex justify-center mb-8">

          <div className="w-40 h-40 rounded-full border-8 border-black flex items-center justify-center text-4xl font-bold">
            82%
          </div>

        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-4">

          <h3 className="font-semibold mb-2">
            Strong Areas
          </h3>

          <ul className="text-sm space-y-1">
            <li>✓ Python</li>
            <li>✓ SQL</li>
            <li>✓ Flask</li>
          </ul>

        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">

          <h3 className="font-semibold mb-2">
            Needs Improvement
          </h3>

          <ul className="text-sm space-y-1">
            <li>⚠ Advanced DSA</li>
            <li>⚠ Deployment</li>
          </ul>

        </div>

      </div>

    </div>

  )
}

export default Hero