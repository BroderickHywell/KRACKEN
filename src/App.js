import './App.css'
import kracken from './kracken.svg'
import Header from './Header.js'


function App() {
  return (
    <div className="App">
      <Header />
      <h1>kracken</h1>
      <img src={kracken} className='kracken-logo' alt='kracken-logo'/>
    </div>
  )
}

export default App
