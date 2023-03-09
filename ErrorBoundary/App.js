// import logo from './logo.svg';
import "./App.css";
import Errorboundary from "./components/ErrorBoundary/Errorboundry";
// import ParentComponent from './components/ParentComponent';
// import NameList from "./components/NameList";
// import Form from "./components/Form";
// import Clickcounter from "./components/HOC/Clickcounter";
// import Hovercounter from "./components/HOC/Hovercounter";
// import ComponentC from './components/ContextAPI/ComponentC'
// import { UserProvider } from "./components/ContextAPI/userContext";
// import Postlist from "./components/ReactAndHTTP/Getlist";

import Hero from "./components/ErrorBoundary/Hero";
function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Hero heroname="SUPERMAN" />
      </Errorboundary>

      <Errorboundary>
        <Hero heroname="SPIDERMAN" />
      </Errorboundary>

      <Errorboundary>
        <Hero heroname="Joker" /> {/* now here will se superman and spiderman will be displayed and joker will give an error.
                                      Placement of the error boundary is totally on us we can wrap it on the top level components or can wrap it on the nested components*/}
      </Errorboundary>

      {/* <Errorboundary>
        <Hero heroname="SUPERMAN" />
        <Hero heroname="SPIDERMAN" />
        <Hero heroname="Joker" />   //since we use errorboundary with everyone dur to joker no will show
      </Errorboundary> */}

      {/*if we comment error boundary then it will show a blank page. */}
      {/* here it is not a good idea to hide the other 2 heroes when the third heroname is throwing an error */}
      {/* suppose we have an E-commerce website there if we have 1000 products, then to hide 1 product dosen't mean we have to hide all 999 products */}
      {/* so above also it is not good to hide other 2 just because one hero is throwing error  */}
    </div>
  );
}

export default App;

{
  /*SUMMARY*************************************************
  1)Error boundaries are the react component that catch javascript error in their child component tree,log those errors, and display a fall-back UI
  2)A class component becomes an Error Boundary by defining either or both of the getDerivedStateFromError and componentDidCatch lifecycle methods
  3)The placement of the error Boundary matters as controls if entire app should have the fall-back UI or just the component causing the problem.
  4)Provide a way to gracefullt handle error in aplication mode
  

  */
}
