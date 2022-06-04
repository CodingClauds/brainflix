import React from "react";
import VideoPlayer from "../Video/VideoPlayer.js";
import VideoDescription from "../VideoDescription/VideoDescription";
import Form from "../VideoForm/Form";
import Comments from "../VideoComments/Comments";
import VideoQueue from "../VideoQueue/VideoQueue";
import axios from "axios";

// const baseURL = "https://project-2-api.herokuapp.com";
// const apiKey = "1f0806b1-00b8-4c72-a7c5-34ac52f1383f";

// VIDEOS ENDPOINT
// https://project-2-api.herokuapp.com/videos?api_key=1f0806b1-00b8-4c72-a7c5-34ac52f1383f

// VIDEOS w/ :id ENDPOINT this will need an input id "Which video do you want?"
// https://project-2-api.herokuapp.com/videos/:id?api_key=1f0806b1-00b8-4c72-a7c5-34ac52f1383f

class HomePage extends React.Component {
  state = {
    sidebarVideo: [],
    selectedVideo: null,
  };

  fetchSelectedVideo = (videoId) => {
    return axios.get(
      `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=1f0806b1-00b8-4c72-a7c5-34ac52f1383f`
    );
  };

  filter = () => {
    return this.state.sidebarVideo.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  componentDidMount() {
    const getVideosEndpoint =
      "https://project-2-api.herokuapp.com/videos?api_key=1f0806b1-00b8-4c72-a7c5-34ac52f1383f";
    axios
      .get(getVideosEndpoint)
      .then((response) => {
        return response.data;
      })
      .then((videoInfo) => {
        const selectedVideoId = this.props.match.params.id || videoInfo[0].id;
        this.fetchSelectedVideo(selectedVideoId).then((detailedSelectVideo) => {
          this.setState({
            selectedVideo: detailedSelectVideo.data,
            sidebarVideo: videoInfo,
          });
        });
      });
  }

  componentDidUpdate(previousProps) {
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

    // Only update the active video if we are on a new url!
    if (previousId !== currentId) {
      this.fetchSelectedVideo(currentId);
    }
  }

  render() {
    this.state.selectedVideo && console.log(this.state.selectedVideo);
    return (
      <>
        <div className="App">
          {this.state.selectedVideo && (
            <VideoPlayer selectedVideo={this.state.selectedVideo} />
          )}

          <div className="desktop">
            <div className="desktop__left">
              {this.state.selectedVideo && (
                <VideoDescription selectedVideo={this.state.selectedVideo} />
              )}
              <Form />
              {this.state.selectedVideo && (
                <Comments selectedVideo={this.state.selectedVideo} />
              )}
            </div>

            <div className="desktop__right">
              {this.state.selectedVideo && (
                <VideoQueue
                  videoList={this.filter()}
                  clickedVideo={this.clickedVideo}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
