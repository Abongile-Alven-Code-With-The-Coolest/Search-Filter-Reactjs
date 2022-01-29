import react from "react";
import Users from "./data/MOCK_DATA.json"
import {useState} from "react"

function App() {
  const [searchString,setSearchString]=useState("")
  return (
    <div className="App">
      <h2>WELCOME</h2>
      <input type="text" placeholder="Search User..." onChange={event=> setSearchString(event.target.value)}/>
      {
        Users.filter((val)=>{
          if(searchString===""){
            return val
          }else if(val.first_name.toLowerCase().includes(searchString.toLowerCase())){
            return val
          }
        }).map(function(resp,iter){
            return (
            <div>
                  <p>
                       {resp.first_name}
                  </p>
             </div>
             )
        })
      }       
    </div>
  );
}

export default App;
