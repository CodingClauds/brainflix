import "./App.scss";
import React from "react";

// USE videos to fetch data for video queue section.
import sidebarVideo from "./data/videos.json";

// USE videoDetails for top section, fetch data to display current video playing.
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/Video/VideoPlayer.js";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import Form from "./components/VideoForm/Form";
import Comments from "./components/VideoComments/Comments";
import VideoQueue from "./components/VideoQueue/VideoQueue";

class App extends React.Component {
  state = {
    sidebarVideo: sidebarVideo,
    selectedVideo: videoDetails[0], // This gets the first object from the videos array of objects.
    videoDetails,
  };

  filter = () => {
    return this.state.sidebarVideo.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  clickedVideo = (videoId) => {
    this.setState({
      selectedVideo: this.state.videoDetails.find((video) => {
        return video.id === videoId;
      }),
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <VideoPlayer selectedVideo={this.state.selectedVideo} />

          <div className="desktop">
            <div class="desktop_left">
              <VideoDescription selectedVideo={this.state.selectedVideo} />
              <Form />
              <Comments selectedVideo={this.state.selectedVideo} />
            </div>

            <div class="desktop-right">
              <VideoQueue
                videoList={this.filter()}
                clickedVideo={this.clickedVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
