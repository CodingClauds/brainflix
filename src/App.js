import "./App.scss";
import "../src/styles/partials/_globals.scss";
import "../src/styles/partials/_mixins.scss";
import "../src/styles/partials/_typography.scss";

import Header from './components/Header/Header';
// import Video from './components/Video/Video';
// import VideoDescription from './components/VideoDescription/VideoDescription';
// import Form from './components/Form/Form';
// import VideoQueue from './components/VideoQueue/VideoQueue'


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Video /> */}
      {/* <VideoDescription /> */}
      {/* <Form /> */}
      {/* <VideoQueue /> */}
    </div>
  );
}

export default App;
