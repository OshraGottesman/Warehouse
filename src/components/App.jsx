import React, {useState} from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


import HomePage from './HomePage';
import Management from './Management';
import SignIn from './SignIn';
import SignUp from './SignUp';
import WorkerPage from './WorkerPage';

import '../style/App.css';

function App() {

  //hooks
  const [workers, setworkers] = useState([]);
  const [items, setitems] = useState([
    {
      id: "11122",
      name: "Green Box",
      forklift: false,
      inPlace: false
    },
    {
      id: "22554",
      name: "Green Box",
      forklift: false,
      inPlace: false
    },
    {
      id: "66698",
      name: "Blue Box",
      forklift: true,
      inPlace: false
    },
    {
      id: "78544",
      name: "Red Box",
      forklift: false,
      inPlace: false
    },
    {
      id: "69875",
      name: "Red Box",
      forklift: false,
      inPlace: false
    }])
    const [currentWorker, setcurrentWorker] = useState();

  //functions
  const addWorker = (id, name, forklift)=>{
    setworkers([...workers,{id:id, fullName:name, forklift:forklift, timesEntered:1, itemsPutAway:0}])
    setcurrentWorker({id:id, fullName:name, forklift:forklift, timesEntered:1, itemsPutAway:0})
  };
  const updateCurrentWorker = (worker)=>{setcurrentWorker(...worker)};

  const workerEnter = (id)=>{
    let workerIndex = workers.findIndex(x=>x.id == id);
    let updateWorker = workers[workerIndex];
    updateWorker.timesEntered++;
    setworkers([...workers.slice(0,workerIndex), updateWorker, ...workers.slice(workerIndex+1)]);
  };

  const putItemInPlace = (itemID, workerID)=>{
    let itemIndex = items.findIndex(x=> x.id == itemID);
    let update = items[itemIndex];
    update.inPlace = true;
    setitems([...items.slice(0,itemIndex), update, ...items.slice(itemIndex+1)]);

    let workerIndex = workers.findIndex(x=>x.id == workerID);
    let updateWorker = workers[workerIndex];
    updateWorker.itemsPutAway++;
    setworkers([...workers.slice(0,workerIndex), updateWorker, ...workers.slice(workerIndex+1)]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signIn' element={<SignIn workers={workers} workerEnter={workerEnter} updateCurrentWorker={updateCurrentWorker}/>}/>
          <Route path='/signUp' element={<SignUp workers={workers} addWorker={addWorker}  />}/>
          <Route path='/workerPage' element={<WorkerPage worker={currentWorker} items={items} putItemInPlace={putItemInPlace}/>}/> 
          <Route path='/management' element={<Management workers={workers}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
