function Workflow() {
  return (

    <div className="max-w-6xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">1</h3>
          <p>Paste hiring requirement or job description.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">2</h3>
          <p>AI analyzes skills and recruiter expectations.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">3</h3>
          <p>AI collects projects, skills, and achievements.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-3">4</h3>
          <p>Generate ATS-friendly professional resume instantly.</p>
        </div>

      </div>

    </div>

  )
}

export default Workflow