
import './App.css';
import Async from './component/async';
import Promises from './component/promises';
import Secontrial from './component/secontrial';

function App() {
  return (
    <div className="App">
      <Promises/>
      <Secontrial/>
      <Async/>
    </div>
  );
}

export default App;
