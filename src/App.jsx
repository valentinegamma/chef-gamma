import './App.css'
import Main from './Components/Main'
import Header from './Components/Header'
import AiData from './Components/AiData'

function App() {
  return (
    <div className='container'>
      <main className='app-main'>
        <Header />
        <Main />
        <AiData />
      </main>
    </div>
     
  )
}

export default App
