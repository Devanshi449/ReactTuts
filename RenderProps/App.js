// import logo from './logo.svg';
import "./App.css";
// import Clickcounter from "./components/RenderProps/ClickCounter";
// import Errorboundary from "./components/ErrorBoundary/Errorboundry";
// import ParentComponent from './components/ParentComponent';
// import NameList from "./components/NameList";
// import Form from "./components/Form";
// import Clickcounter from "./components/HOC/Clickcounter";
// import Hovercounter from "./components/HOC/Hovercounter";
// import ComponentC from './components/ContextAPI/ComponentC'
// import { UserProvider } from "./components/ContextAPI/userContext";
// import Getlist from "./components/ReactAndHTTP/Getlist";
// import Postform from "./components/ReactAndHTTP/Postform"
// import Hero from "./components/ErrorBoundary/Hero";
// import Clickcounter from './components/RenderProps/ClickCounter'
// import Hovercounter from "./components/RenderProps/Hovercounter";
// import User from "./components/RenderProps/User"
import Counter from "./components/RenderProps/Counter";
import Hoveredcounter from "./components/RenderProps/Hovercounter";
import Clickcounter from "./components/RenderProps/ClickCounter";

function App() {
  return (
    
    <div className="App">
      <Counter
          render={(count,incrementCount)=>(
            <Clickcounter count={count} incrementCount={incrementCount}/>
          )}
      />
      
      <Counter
          render={(count,incrementCount)=>(
            <Hoveredcounter count={count} incrementCount={incrementCount}/>
          )}
      />
    </div>
  
  )
} 
export default App;

