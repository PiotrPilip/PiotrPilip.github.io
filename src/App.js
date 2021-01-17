import logo from './logo.svg';
import './App.scss';

import Stars from './components/atoms/stars/Stars'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stars />
          <div className="content">
            Piotr Pilip Personal Webpage
          </div>
      </header>
    </div>
  );
}

export default App;
