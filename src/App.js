import './App.css';
import Category from './pages/Category';
import WelcomePage from './pages/WelcomePage';
import { Router } from "@reach/router";
import Questions from './pages/Questions';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Router>

      <WelcomePage path="/" />
      <Category path="/category" />
      <Questions path="/questions/:id" />
      <Result path="/result/:result" />
      </Router>
    </div>
  );
}

export default App;
