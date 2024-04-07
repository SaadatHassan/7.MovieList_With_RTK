import { MovieList } from "./components/MovieList";
import { SongList } from "./components/SongList";
import { useDispatch } from "react-redux";
import { reset } from "./store";
import "./store";

function App() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <button className="rounded bg-red-500 text-white" onClick={handleReset}>
        Reset both lists
      </button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
