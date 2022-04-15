import './App.css';
import ContentContainer from './components/contents/fixed/ContentContainer/ContentContainer';
import Navbar from './components/contents/fixed/Navbar/Navbar';

function App() {

  //json-server --watch server.json --port 3001
  return (
    <div className="App">
      <Navbar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
