import "./App.css";
import UpperCaseColor from "./components/UpperCaseColor";
import Button from "./components/Button";

function App() {
  return (
    <>
      <UpperCaseColor />
      <UpperCaseColor content="the paragraph above has no props, this one needs to set a 'desiredcolor'" />
      <UpperCaseColor desiredColor='green' content="This desiredColor prop is set on 'green'" />
      <UpperCaseColor desiredColor='#fff' content="This desiredColor prop is set on '#fff'" />

      <Button />
      <Button label="Don't you dare click here" />
    </>
  );
}

export default App;
