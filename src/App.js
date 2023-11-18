
import './App.css';
import Async from './component/async';
import Jokes from './component/jokes';
import Promises from './component/promises';
import Secontrial from './component/secontrial';

function App() {
  return (
    <div className="App">
      <Promises/>
      <Secontrial/>
      <Async/>
      <Jokes/>
    </div>
  );
}

export default App;
