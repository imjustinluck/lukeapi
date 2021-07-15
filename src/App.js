import './App.css';
import {Router,navigate} from '@reach/router'
import React, {useState} from 'react';
import Search from './components/Search'
import Display from './components/Display'

function App() {

  const [item, setItem] = useState({
    search:'people',
    id:null
});

  // const [trigger, setTrigger] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${item.search}/${item.id}`)
    // .then(()=>{setTrigger(!trigger)})
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <Search item={item} setItem={setItem} handleSubmit={handleSubmit}/>
      <Router>
        <Display path="/:what/:id"/>
      </Router>
    </div>
  );
}

export default App;
