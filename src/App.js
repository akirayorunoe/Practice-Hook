import {useContext,useRef} from 'react'
import {TodosContext} from './store/todosContext'
import {addJob,setJob} from './store/actions'

function App() {
  const [state,dispatch] = useContext(TodosContext)
  const {job,jobs}=state
  console.log(state)
  const handleAdd=()=>{
   // console.log('add',job)
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  const inputRef=useRef()
  return (
    <div >
      <input placeholder='Type here...' 
      ref={inputRef}
      value={job} onChange={(e)=>dispatch(setJob(e.target.value))}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job,index)=>(<li key={index}>
          {job}
        </li>))}
      </ul>
    </div>
  );
}

export default App;
