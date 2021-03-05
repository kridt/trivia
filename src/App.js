import './App.css';
import Category from './pages/Category';
import WelcomePage from './pages/WelcomePage';
import { Router } from "@reach/router";
import Questions from './pages/Questions';

function App() {
  return (
    <div className="App">
      <Router>

      <WelcomePage path="/" />
      <Category path="/category" />
      <Questions path="/questions/:id" />
      </Router>
    </div>
  );
}

export default App;
