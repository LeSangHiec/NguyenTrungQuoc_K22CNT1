// import logo from './logo.svg';
import './App.css';
import Func_JSX_NguyenTrungQuoc from './components/Func_JSX_NguyenTrungQuoc';

function App() {
  return (
      <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_NguyenTrungQuoc />
        <Func_JSX_NguyenTrungQuoc fullName="Nguyen Trung Quoc 2" age="20" />
      </section>
  );
}

export default App;
