import './App.scss';
import React from 'react';

// USE videos to fetch data for video queue section. 
// import videos from './data/videos.json';

// USE videoDetails for top section, fetch data to display current video playing.
import videoDetails from './data/video-details.json';

import Header from './components/Header/Header.js';
import VideoPlayer from './components/Video/VideoPlayer.js';
import VideoDescription from './components/VideoDescription/VideoDescription';
import Form from './components/VideoForm/Form';
import Comments from './components/VideoComments/Comments';
import VideoQueue from './components/VideoQueue/VideoQueue';


class App extends React.Component {
  
  state = {
    videos: videoDetails, //setting the entire object to videos
    selectedVideo: videoDetails[0], //gets the first object from the videos array of objects. defaults to first
  }


  filter = () => {
    return this.state.videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id; 
    })
  }

  clickedVideo = (videoId) => {
    this.setState({
      selectedVideo: this.state.videos.find((video) => {
        return video.id === videoId; //this returns the video object that has been selected.
      }),
    })
  }

  render() {
    return (
      <>    
        <div className="App">
          <Header />
          <VideoPlayer selectedVideo={this.state.selectedVideo} />  
          <VideoDescription selectedVideo={this.state.selectedVideo} />
          <Form />
          <Comments selectedVideo={this.state.selectedVideo}/>
          <VideoQueue 
            videoList={this.filter()}
            clickedVideo={this.clickedVideo} />
        </div>
      </>
    )
  }
};

export default App;
