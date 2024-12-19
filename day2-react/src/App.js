import './App.css'
import InputState from './component/InputState';
import PageMove from './component/PageMove';
import Say from './Say';

function App(){

  return (
    <div className="App">
        <h3>😓😥하...진짜 너무 어렵다..</h3>
        <Say/>
        <hr/>
        <InputState/>
        {/* <Calculate/> */}
        <PageMove last={12}/>
        
    </div>
  )
}

export default App;