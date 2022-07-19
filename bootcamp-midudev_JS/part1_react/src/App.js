import "./App.css";
import Mensaje2 from "./Mensaje2";

const Mensaje = () => {
  return <h1>Welcome!</h1>;
};

const Description = () => {
  return <p>Utilizando components</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje />
      <Mensaje2 color="Red" message="Trabajando con props" />
      <Description />
    </div>
  );
};

export default App;
