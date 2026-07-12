import Hero from "./components/Hero"
import Features from "./components/Features"
import Workflow from "./components/Workflow"
import JDAnalyzerAI from "./components/JDAnalyzerAI"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <Features />
      <Workflow />
      <JDAnalyzerAI />
    </div>
  )
}

export default App;