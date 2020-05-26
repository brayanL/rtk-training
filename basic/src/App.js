import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './apps/reducers';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);
  const { actions } = counterSlice;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Example Using Redux ToolKit</h1>
        <p>
          Clicked: <span id="value">{counter}</span> times
          <button id="increment" onClick={() => dispatch(actions.increment())}>+</button>
          <button id="decrement" onClick={() => dispatch(actions.decrement())}>-</button>
        </p>
      </header>
    </div>
  );
}

export default App;
