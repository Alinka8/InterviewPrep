import "./App.css";
import LogIn from "./website_structure/LogIn/LogIn";
import NavBar from "./website_structure/navBar/NavBar";
import SignIn from "./website_structure/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SignIn /> */}
      <LogIn />
    </div>
  );
}

export default App;
