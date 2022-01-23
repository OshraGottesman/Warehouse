import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

export default function SignIn(props) {
    //hooks
    const [id, setid] = useState()
    //functions
    const navigate = useNavigate();
    const enter = ()=>{
        if(id==99999){
            navigate('/management');
        }
        else{
            let exists = props.workers.filter((worker)=>worker.id == id);
            if(exists.length==0){
                alert(`worker ${id} doesnt exist in the system`)
            }
            else{
                console.log(exists);
                props.workerEnter(id);
                props.updateCurrentWorker(exists)
                navigate('/workerPage');
            }
        }

    }

    return (
        <div>
            <Header header="Sign In"/>
            <input onChange={e=>{setid(e.target.value)}} type="number" placeholder='please enter worker ID'/>
            <button onClick={enter}>Enter</button>
        </div>
    )
}
