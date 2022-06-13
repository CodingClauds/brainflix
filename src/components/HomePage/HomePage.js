import React from "react";
import axios from "axios";
import "./HomePage.scss";

import VideoPlayer from "../Video/VideoPlayer.js";
import VideoDescription from "../VideoDescription/VideoDescription";
import Form from "../VideoForm/Form";
import Comments from "../VideoComments/Comments";
import VideoQueue from "../VideoQueue/VideoQueue";

class HomePage extends React.Component {
  state = {
    sidebarVideo: [],
    selectedVideo: null,
  };

  url_base = "http://localhost:8080/videos/";

  // Get URL from localhost:8080 that we set up on the back-end.
  fetchSelectedVideo = (videoId) => {
    return axios.get(`http://localhost:8080/videos/${videoId}`);
  };

  filter = () => {
    return this.state.sidebarVideo.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
  };

  componentDidMount() {
    axios
      .get(this.url_base)
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(previousProps) {
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

    if (previousId !== currentId) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Only update the active video if we are on a new url!
      // This is the default setting, onload/homepage this should render first obj in array.
      if (previousId && !currentId) {
        this.fetchSelectedVideo(this.state.sidebarVideo[0].id).then(
          (detailedSelectVideo) => {
            this.setState({ selectedVideo: detailedSelectVideo.data });
          }
        );
        // OR ELSE it should fetch the one with the url/id
      } else {
        this.fetchSelectedVideo(currentId).then((detailedSelectVideo) => {
          this.setState({ selectedVideo: detailedSelectVideo.data });
        });
      }
    }
  }

  render() {
    const individualVideo = this.state.selectedVideo;

    return (
      <>
        <div className="App">
          {individualVideo && <VideoPlayer selectedVideo={individualVideo} />}

          <div className="desktop">
            <div className="desktop__left">
              {individualVideo && (
                <VideoDescription selectedVideo={individualVideo} />
              )}
              <Form />
              {individualVideo && <Comments selectedVideo={individualVideo} />}
            </div>

            <div className="desktop__right">
              {individualVideo && <VideoQueue videoList={this.filter()} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
