import React,{useState} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    //hooks
    const [id, setid] = useState();
    const [name, setname] = useState("");
    const [forklift, setforklift] = useState(false);
    const [idError, setidError] = useState("");
    const [nameError, setnameError] = useState("");

    //functions
    const checkID = ()=>{
        if(id.length==5){
            let exists=props.workers.filter((worker)=> worker.id==id);
            if(exists.length==0){
                setidError("");
                return true;
            }
            else{
                setidError("ID exists in system")
                return false;
            }
        }
        else{
            setidError("ID must be 5 digits")
            return false;
        }
    };

    const checkName = ()=>{
        if(name.length>=5){
            // if(name.contains(" ")){
                setnameError("");
                return true;
            // }
            // else{
            //     setnameError("name must contain a space");
            // }
        }
        else{
            setnameError("name must be at least 4 characters");
            return false;
        }
    }
    const navigate = useNavigate();
    const checkInfo=()=>{
        let idGood= checkID();
        console.log(idGood);
        let nameGood = checkName();
        console.log(nameGood);
        if(idGood && nameGood){
            props.addWorker(id, name, forklift);
            navigate('/workerPage');
        }
    }

    return (
        <div>
            <Header header="Sign Up"/>
            <input onChange={e=>setid(e.target.value)} type="number" placeholder='Please Enter Worker ID'/>
            <p style={{color: "red"}}>{idError}</p>
            <input onChange={e=>setname(e.target.value)} type="text" placeholder='Please Enter Full Name'/>
            <p style={{color: "red"}}>{nameError}</p>
            <p>Forklift License</p>
            <input onChange={()=>setforklift(true)} type="radio" name='forklift' value='yes'/>
            <label for="yes">Yes</label>
            <input onChange={()=>setforklift(false)} type="radio" name='forklift' value='no' checked='checked'/>
            <label for="no">No</label>
            <button onClick={()=>{checkInfo()}}>Sumbit</button>
        </div>
    )
}
