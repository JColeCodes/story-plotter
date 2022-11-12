import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="title">
          <h1>Story Plotter</h1>
          <div className="story-title">
            Story Title
          </div>
        </div>
        <div className="genre-theme">
          <label for="theme">Select a theme:</label>
          <select name="theme">
            <option value="default" selected>Default</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="scifi">Sci-Fi</option>
            <option value="dystopian">Dystopian</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="historical">Historical Fiction</option>
            <option value="adventure">Adventure</option>
            <option value="thriller">Thriller</option>
            <option value="contemporary">Contemporary</option>
            <option value="teen">Teen</option>
            <option value="children">Children's</option>
          </select>
        </div>
      </header>
      <div className="main-body">
        <section className="characters">
          <h2>Characters</h2>
          <button>Add New Character</button>
        </section>
        <section className="settings">
          <h2>Settings</h2>
          <button>Add New Setting</button>
        </section>
        <section className="story-timeline">
          <h2>Story Timeline</h2>
          <button>Add New Story Event</button>
        </section>
      </div>
    </div>
  );
}

export default App;
