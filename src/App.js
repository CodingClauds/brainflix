import './App.scss';
import React from 'react';

// USE videos to fetch data for video queue section. 
// import videos from './data/videos.json';

// USE videoDetails for top section, fetch data to display current video playing.
import videoDetails from './data/video-details.json';

import Header from './components/Header/Header.js';
import Video from './components/Video/VideoPlayer.js';
import VideoDescriptions from './components/VideoDescription/VideoDescription';


class App extends React.Component {
  state = {
    videos: videoDetails, //settings the entire object to videos
    selectedVideo: videoDetails[0], //gets the first object from the videos array of objects. defaults to first
  };


  render() {
    return (
      <>    
        <div className="App">
          <Header />
          <Video selectedVideo={this.state.selectedVideo} />  
          <VideoDescriptions selectedVideo={this.state.selectedVideo} />
        </div>
      </>
    );
  }
}

export default App;
