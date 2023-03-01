// import logo from './logo.svg';
import "./App.css";
// import Deletemodal from "./components/Deletemodal";
// import Todo from "./components/Todo";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchApi } from "./actions/action";
import Newtodo from "./components/Newtodo";

function App() {
  return (
    <div className="App">
      <Newtodo />
      
      {/* <Deletemodal /> */}

      {/* <Todo />
     <div>
      {users.map((val)=>{
        return <h2 key={val.id}>{val.name}</h2>
      })}
     </div> */}
    </div>
  );
}

export default App;
