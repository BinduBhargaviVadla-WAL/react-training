import "./App.css";
import Add from "./Add";
import StateVariablesInput from "./StateVariablesInput";
import TodoApp from "./TodoApp";
import TodoComp from "./TodoComp";
import ImmuteFeb9 from "./ImmuteFeb9";
import GreetProps from "./GreetProps";
import { useEffect, useState } from "react";
import FindCountry from "./FindCountry";
import FindGender from "./FindGender";
import HobbiesComp from "./HobbiesComp";
import HobbyComp from "./HobbyComp";
import ExampleUseref from "./ExampleUseRef";
import TodoUseRef from "./TodoUseRef";
import ExampleFormik from "./ExampleFormik";
import ExampleFormik2 from "./ExampleFormik2";
import ExamUseRef from "./ExamUseRef";
import ProductForm from "./ProductForm";
import FormikProduct from "./FormikProduct";
import Profile from "./Profile";
import axios from "axios";
import ShowUserName from "./ShowUserName";

import LearnUSeEffect from "./LearnUseEffect";
import Exam2 from "./Exam2";
import Library from "./Library";
import Hoc from "./ExamFeb28/Hoc";
import UserPersonalInfo from "./ExampleUseContext/UserPersonalInfo";
import UserProfessionalInfo from "./ExampleUseContext/UserProfessionalInfo";
import UserObContext from "./UserObContext";
import UserName from "./ExampleUseContext/UserName";
import CountReducer from "./ExampleUseReducer/CountReducer";
import CounterUseReducer from "./ExampleUseReducer/CounterUseReducer";
import Hobbies from "./ExampleUseReducer/Hobbies";
import BetterCounterCustom from "./BetterCounterCustom";
import ExampleUseLocalStorage from "./ExampleUseLocalStorage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ShowUserNameAndAge from "./ShowUserNameAndAge";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ReduxCounter from "./ReduxCounter";
import ExampleUseEffect from "./ExampleUseEffect";
import UseRefExample from "./UseRefExample";
import BasicTable from "./ExampleTables/BasicTable";
import Sorting from "./ExampleTables/Sorting";
import BasicSorting from "./ExampleTables/BasicSorting";
import SelectableRows from "./ExampleTables/SelectableRows";
import ExpandableRows from "./ExampleTables/ExpandableRows";
import BasicPagination from "./ExampleTables/BasicPagination";
import Pagination from "./ExampleTables/Pagination";
import TodoServer from "./TodoServer";
import HobbiesServer from "./hobbbiesServer";
import HobbyServer from "./hobbyServer";
import SocketDemo from "./SocketDemo";
function App() {
  const userOb = {
    personal: { name: "Bindu", phoneNo: 9897867863 },
    professional: { company: "WestAgileLabs", designation: "Engineer" },
  };

  return (
    <div className='App'>
      {/* <UserObContext.Provider value={userOb}>
        <UserPersonalInfo/>
        <UserProfessionalInfo/>
        
      </UserObContext.Provider>

      <CounterUseReducer/> */}
      {/* <Hobbies/> */}
      {/* <BetterCounterCustom/> */}
      {/* <ExampleUseLocalStorage/> */}
      {/* <HobbyServer />
      <HobbiesServer /> */}
      <BrowserRouter>
        {/* <a href='/bettercountercustom'>BetterCounterCustom</a><br/> */}
        <Link to='/SocketDemo'>Socket</Link>
        <br />
        <Link to='/todoServer'>TodoServer</Link>
        <br />
        <Link to='/ReduxCounter'>ReduxCounter</Link>
        <br />
        <Link to='/bettercountercustom'>BetterCounterCustom</Link>
        <br />
        <Link to='/hobbies'>Hobbies</Link>
        <br />
        <Link to='/show/Bindu/21'>Show name and age</Link>
        <br />
        <Link to='/bettercountercustom/todo'>Todo as Child</Link>
        <br />

        <Routes>
          <Route path='/SocketDemo' element={<SocketDemo />} />
          <Route path='/todoServer' element={<TodoServer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bettercountercustom' element={<BetterCounterCustom />}>
            <Route path='todo' element={<TodoApp />} />
          </Route>
          <Route path='/todo' element={<TodoApp />} />
          <Route path='/show/:name/:age' element={<ShowUserNameAndAge />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/hobbies' element={<Hobbies />} />
          </Route>
          <Route path='/ReduxCounter' element={<ReduxCounter />} />
        </Routes>
      </BrowserRouter>
      {/* <ExampleUseEffect/>
      <UseRefExample/> */}
      {/* <BasicTable />
      <Sorting />
      <BasicSorting />
      <SelectableRows />
      <ExpandableRows />
      <BasicPagination />
      <Pagination /> */}
    </div>
  );
}
export default App;

// import React from "react";
// import "./App.css"
// import HocComponent from './HocComponent'

// class App extends React.Component {
//   render() {
//     // Call the props from originalComponent
//     return <h1>{this.props.name}</h1>
//   }
// }
// // Passed the originalcomponent
// export default HocComponent(App);

//yesrday
//Feb-25
// const [userOb, setUserOb] = useState({username: "default", hobbies:[]});
// useEffect(() =>{
//   axios.get("userob.json").then((res) => {
//     console.log(res.data);
//     setUserOb(res.data);
//   });
// },[]);
// const ModifiedProfile = Hoc(Profile);
// const ModifiedGetUserName = Hoc(ShowUserName);

// let [msg, setMsg] = useState("Initial State");
// let [date, setDate] = useState(null);
// let [no, setNo] = useState(0);
// let [showGreat, setShowGreat] = useState(false);

//Feb-25
// <div className='App'>
//   {/* <Profile userOb={userOb}></Profile>
//   <ShowUserName userOb={userOb}></ShowUserName> */}

//   <ModifiedProfile/>
//   <ModifiedGetUserName/>
// </div>
// Feb-25
// <Library/>

//<ProductForm></ProductForm>
//<ExamUseRef></ExamUseRef>
//<ExampleFormik2></ExampleFormik2>
//<TodoUseRef></TodoUseRef>
//<ExampleUseref></ExampleUseref>
//<HobbyComp></HobbyComp>
//<FindGender></FindGender>
// <FindCountry></FindCountry>
//   <LearnUseEffect></LearnUseEffect>
//   { showGreat ? <LearnUseEffect></LearnUseEffect> : "" }
//lllllllllllll
//   <input type="text" name={msg} onInput={(event) => {
//     setMsg(event.target.value);
//   }} />
//   <input type="date" name={date} onInput={(event) => {
//     setDate(event.target.value);
//   }} />
//   <input type="number" name={no} onInput={(event) => {
//     setNo(event.target.value);
//   }} />
//   <select
//     onChange={(event) => {
//       console.log(event.target.value);

//       let showGreatValue = event.target.value === 'true';
//       setShowGreat(showGreatValue);
//     }}>
//     <option value={true}>Show</option>
//     <option value={false}>Hide</option>
//   </select>
//   {showGreat ? <GreetProps
//     message={msg} date={date} no={no}>
//   </GreetProps> : ""} */}
