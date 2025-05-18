import './App.css';
import MainPage from './components/MainPage';
import LeftBlock from './components/LeftBlock';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <div className="App page">
      <div className="half-container">
        <div className="LeftBlock">
          <LeftBlock />
        </div>
        <div className="right-block">
          <div className="right-container">
            <section id="main"><MainPage /></section>
            <section id="skills"><SkillsPage /></section>
            <section id="projects"><ProjectsPage /></section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
