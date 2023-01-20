import "./App.css";
import CharactersList from "./components/CharactersList";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ErrorPage } from "./components/ErrorPage";
// import { PageOne } from "./components/PageOne";
// import { PageTwo } from "./components/PageTwo";
import { Routes, Route, Link } from "react-router-dom";
import { CharacterDetails } from "./components/CharacterDetails";

function App() {
  return (
    <div className="App">

      <div>
        <h1>This is the header</h1>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">List of Characters</Link>
        {/* <Link to="/my-character">My character</Link> */}
      </div>

      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={ <ErrorPage /> } />
        <Route path="/character/:characterId" element={<CharacterDetails />} />
        {/* <Route path='/one' element={<PageOne/>} />
      <Route path='/two' element={<PageTwo/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
