import './App.css';
import '../assets/css/compo.css'
import { students } from './data/studentdata'
import { useState } from 'react'
import Profile from './components/Profile'
import DetailsTable from './components/DetailsTable'

function App() {
  const [studentIndex, setStudentIndex] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Students Information Portal</h1>
        <div className="outerDiv">
          <div className="rightDiv">
            <Profile student={students[studentIndex]} />
          </div>
        </div>

        <div className='leftDiv'>
          <DetailsTable students={students} setStudentIndex={setStudentIndex}/>
        </div>
      </header>
    </div>
  );
}

export default App;
