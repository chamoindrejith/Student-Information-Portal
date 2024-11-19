import './assets/css/compo.css'
import { students } from './data/studentdata'
import { useState } from 'react'
import Profile from './components/Profile'
import DetailsTable from './components/DetailsTable'

function App() {
  const [studentIndex, setStudentIndex] = useState(0)
  return (
    <>
      <center><h3>Students Information Portal</h3></center>
      <div className="outerDiv">
        <div className="rightDiv">
          <Profile student={students[studentIndex]} />
        </div>
        <div className="leftDiv">
          <DetailsTable students={students} setStudentIndex={setStudentIndex} />
        </div>
      </div>
    </>
  );
}

export default App;
