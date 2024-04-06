import { MovieList } from "./components/MovieList";
import { SongList } from "./components/SongList";
import "./store";

function App() {
  const handleReset = () => {};

  return (
    <div>
      <button onClick={handleReset}>Reset both lists</button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
