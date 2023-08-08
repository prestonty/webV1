import './App.css';
import Navbar from './components/navbar'
import Section from './components/section'
import Content from './components/content'
import Header from './components/header'
import Footer from './components/footer'
import logo from './assets/images/logo.jpg'
import { getTerm } from './utils/currentTerm.js' // must have the curly brackets to show it is a utility function, the keyword default is only used for component functions, not utility, also must use same function name when importing!!

function App() {
  const term = getTerm();
  return (
    <div className="App">
      <Header>
      <Navbar></Navbar>
      </Header>
      
      <Section title='About Me' />
        {/* make scripts for (first year, second year, all the way to fifth year student at UW)
        major in system design engineering, hobbies include chess, taekwondo, working out at the gym, running, (trying to escape anime and gaming) */}
      
      <Content content={'Hello, I am Preston Kyle Tom-Ying, a ' + {term} + ' year Systems Design Engineering student at the University of Waterloo.'} imageSrc={logo} alt='logo'></Content>

      


      <Section title="Origin of my Name"/>
        {/* the image can be your grandfather or stuff, up to you, idk if its disrespectful to their name. */}
      <Content content="My paternal (great)grandfather (get the story from the dad later)"></Content>

{/* next section is syde schedule, make it interactive!!! UW flow links, make things pop up, i want to spawn more parts of website then take them away, cool stuff!!! */}
      <Section></Section>
      {/* create a grid component, create  */}

      <Footer></Footer>
    </div>
  );
}

export default App;
