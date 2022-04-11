import './assets/styles/index.css';
import Header from './components/Header';
import Main from './Main';

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
