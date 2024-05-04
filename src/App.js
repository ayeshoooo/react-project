import Navbar from "./component/Navbar/navbar";
import Intro from './component/Intro/intro'
import Skill from "./component/Skills/skill";
import Works from "./component/Works/works";
import Contact from "./component/contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>

     
    </div>
  );
}

export default App;
