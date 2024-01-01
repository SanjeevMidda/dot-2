import "./index.css";
import Dot from "./components/Dot";

function App() {
  let noOfDots = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="App">
      <div className="mainContainer">
        <h3>dot</h3>
        <div className="dotContainer">
          {noOfDots.map(() => {
            return <Dot />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
