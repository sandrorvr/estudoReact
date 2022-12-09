import './App.css'

import Area from './components/Area/Area'
import InfoEscala from './components/InfoEscala/InfoEscala';

function App() {
  let locs = [
    {id:'1', street:'Pituba'},
    {id:'2', street:'Amaralina'},
    {id:'3', street:'Ondina'},
    {id:'4', street:'Mata Escura'},
    {id:'5', street:'Mata Escura'},
    {id:'6', street:'Mata Escura'},
    {id:'7', street:'Mata Escura'},
    {id:'8', street:'Mata Escura'},
  ];
  return (
    <div className="App">
      <InfoEscala />
      <Area locs={locs}/>
    </div>
  )
}

export default App
