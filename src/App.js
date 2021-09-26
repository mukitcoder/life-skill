import './App.css';
import LifeSkillProgram from './components/LifeSkillProgram/LifeSkillProgram';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container-fluid mb-4">
      <Header></Header>
      </div>
      <div className="container">
        <Banner></Banner>
      <LifeSkillProgram></LifeSkillProgram>
      </div>
      <div className="bg-dark">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
