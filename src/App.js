import './App.css'
import kraken from './kracken.svg'
import Header from './Header.js'


function App() {
  return (
    <div className="App">
      <Header />
      <h1>kracken</h1>
      <img src={kraken} className='kraken-logo'/>
    </div>
  )
}

export default App
