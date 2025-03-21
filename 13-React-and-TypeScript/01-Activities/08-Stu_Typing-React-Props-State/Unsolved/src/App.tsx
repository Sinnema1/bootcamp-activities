// TODO: Integrate the Advertisement component into the App component below. Create two instances of the component.

import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';

function App() {

  return (
    <>
      <Advertisement productDescription='Keyboard' price={400.00} companyName='Dygma'/>
      <Advertisement productDescription='mouse' price={100.00} companyName='Razer'/>
      <Calculator />
    </>
  )
}

export default App
