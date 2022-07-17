import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row output">
        <div className="previous-operand d-flex justify-content-end">
          *9304829
        </div>
        <div className="current-operand d-flex justify-content-end">
          45094905
        </div>
      </div>
      <div className="row">
      <button className="span-two col-6">AC</button>
      <button className='col'>DEL</button>
      <button className='col'>÷</button>
      </div>
      <div className="row">
      <button className='col'>1</button>
      <button className='col'>2</button>
      <button className='col'>3</button>
      <button className='col'>*</button>
      </div>
      <div className="row">
      <button className='col'>4</button>
      <button className='col'>5</button>
      <button className='col'>6</button>
      <button className='col'>+</button>
      </div>
      <div className="row">
      <button className='col'>7</button>
      <button className='col'>8</button>
      <button className='col'>9</button>
      <button className='col'>-</button>
      </div>
      <div className="row">
      <button className='col'>.</button>
      <button className='col'>0</button>
      <button className='col-6 span-two'>=</button>
      </div>
    </div>
  );
}

export default App;
