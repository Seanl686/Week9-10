import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center items-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold my-4">Redux Counter</h1>
      <div className="p-8">
        <Counter />
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
