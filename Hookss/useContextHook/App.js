// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import ComponentC from "./components/Hookss/useContextHook/ComponentC";
import ComponentE from "./components/Hookss/useContextHook/ComponentE";
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    
    <div className="App">
      <UserContext.Provider value={'Pinky '}>
        <ChannelContext.Provider value={'ListenItUnplugged'}>
          <ComponentE/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  // useContext Hook only makes the consumption easier 
  
  )
} 

export default App;

