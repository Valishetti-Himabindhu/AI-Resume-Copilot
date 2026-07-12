function Features() {

  const features = [
    "AI Resume Analysis",
    "ATS Optimization",
    "Resume Match Score",
    "Dynamic Skill Checklist",
    "Professional Resume Rewriting",
    "Placement & Internship Modes"
  ]

  return (

    <div className="bg-black text-white py-20">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6"
            >

              <h3 className="text-xl font-semibold">
                {feature}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Features