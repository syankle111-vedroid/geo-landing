import { Hero } from './components/Hero/Hero'
import { Countries } from './components/Countries/Countries'
import './App.scss'

function App() {
  return (
    <div className="scroll-container">
      <Hero />
      <Countries />
    </div>
  )
}

export default App
