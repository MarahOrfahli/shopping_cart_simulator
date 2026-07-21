import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-600">
        Hello World!
      </h1>

      <FontAwesomeIcon icon={faHouse} size="2x" color="blue"/>
      {/* spin */}
    </>
  );
};

export default App;
