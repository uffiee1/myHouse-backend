/* eslint-disable no-unused-vars */

import './App.css';

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import EstateDetail from './components/estate/EstateDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {

  const [name, setName] = useState("");

  useEffect(() => {
    (
      async () => {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  });

  return (
    <Router>
      <div className="App">
        <Navbar name={name} />
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/profile" exact component={() => <Profile name={name} />}></Route>
        <Route path="/estate/:id" exact component={EstateDetail}></Route>
      </div>
    </Router>
  );
}

export default App;




// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Switch>
//         <Header />
//         <Route path="/" exact component={Home}></Route>
//       </Switch>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
