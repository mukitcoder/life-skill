import './App.css';
import LifeSkillProgram from './components/LifeSkillProgram/LifeSkillProgram';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      <Header></Header>
      </div>
      <div className="container">
      <LifeSkillProgram></LifeSkillProgram>
      </div>
    </div>
  );
}

export default App;
