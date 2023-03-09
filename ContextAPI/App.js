// import logo from './logo.svg';
import "./App.css";
// import ParentComponent from './components/ParentComponent';
// import NameList from "./components/NameList";
// import Form from "./components/Form";
// import Clickcounter from "./components/HOC/Clickcounter";
// import Hovercounter from "./components/HOC/Hovercounter";
import ComponentC from './components/ContextAPI/ComponentC'
import { UserProvider } from "./components/ContextAPI/userContext";

// import Hero from "./components/boundry"
function App() {
  return (
    <div className="App">
      <UserProvider value="Devanshi">   
                                         {/* now provider component is responsible for proving a value
                                        //now this value be consumed by component C and any componented nested under it */}
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
