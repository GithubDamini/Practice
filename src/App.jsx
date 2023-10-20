//import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
//import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
//import ReactHookForm from "./components/ReactHookForm/Example";
const App = () => {
 return (
 <div>
 {<Controlled />}
 {<Checkbox /> }
 {<Dropdown />}
 {<Uncontrolled />}
 {/*
 { <Multiple /> }
 { <Validate /> }
 
 <ReactHookForm />*/}
 </div>
 );
};
export default App;
