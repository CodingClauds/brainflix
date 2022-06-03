import React from "react";
import VideoPlayer from "../Video/VideoPlayer.js";
import VideoDescription from "../VideoDescription/VideoDescription";
import Form from "../VideoForm/Form";
import Comments from "../VideoComments/Comments";
import VideoQueue from "../VideoQueue/VideoQueue";

// USE videos to fetch data for video queue section.
import sidebarVideo from "../../data/videos.json";

// USE videoDetails for top section, fetch data to display current video playing.
import videoDetails from "../../data/video-details.json";

class HomePage extends React.Component {
  state = {
    sidebarVideo: sidebarVideo,
    selectedVideo: videoDetails[0],
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
    // console.log(this.props.match.params.id);

    return (
      <>
        <div className="App">
          <VideoPlayer selectedVideo={this.state.selectedVideo} />

          <div className="desktop">
            <div className="desktop__left">
              <VideoDescription selectedVideo={this.state.selectedVideo} />
              <Form />
              <Comments selectedVideo={this.state.selectedVideo} />
            </div>

            <div className="desktop__right">
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

export default HomePage;
