import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Intro from './components/Intro';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Welcome />
        <Intro />
        <Aboutme />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
