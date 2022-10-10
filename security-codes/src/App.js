import './App.css';
import {ClassState} from './ClassState'
import {UseState} from './UseState'

function App() {
  return (
    <div className="App">
      <UseState name='UseReducer' />
      <ClassState name='UseClass'/>
    </div>
  );
}

export default App;
