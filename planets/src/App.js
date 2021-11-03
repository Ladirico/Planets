import './App.css';
import ContentContainer from './components/contents/fixed/ContentContainer/ContentContainer';
import Navbar from './components/contents/fixed/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
