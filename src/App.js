import './App.css';
import MyClassComponent from './ClassComponent';
import MyFunctionalComponent from './FunctionalComponent';

function App() {

  return (
    <div className="App">
        <MyClassComponent count={"1"} name={"Kamesh"} dob={"dd/mm/yyy"} />
        <MyFunctionalComponent count={"2"} name={"Prasad"} dob={"dddd/mmm/yyyy"} />
    </div>
  );
}

export default App;
