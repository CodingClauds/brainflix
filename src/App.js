import './App.scss';
// USE videos to fetch data for video queue section. 
import videos from './data/videos.json';

// USE videoDetails for top section, fetch data to display current video playing.
import videoDetails from './data/video-details.json';

import '../src/styles/partials/_globals.scss';
import '../src/styles/partials/_mixins.scss';
import '../src/styles/partials/_typography.scss';

import Header from './components/Header/Header.js';
import VideoPlayer from './components/Video/Video.js';
// import VideoDescription from './components/VideoDescription/VideoDescription';


// // NEEDS CONVERTING TO CLASS FOR STATE USE
const App = () => {

  // state = {
  //     selectedVideo: videoDetails[0],
  //   }

// // YOU CAN THEN USE ‘this.state.selectedVideo’ to ACCESS DATA FROM THAT JSON FILE
  return (
    <div className="App">
      <Header />
      {videos.map((video) => {
        return(
          <p key={video.id}>
            {video.title}
          </p>
        )
      })}
      <VideoPlayer />
    </div>
  );
}

export default App;
