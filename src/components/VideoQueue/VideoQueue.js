import { Link } from "react-router-dom";
import "./VideoQueue.scss";

export default function VideoQueue({ videoList, clickedVideo }) {
  return (
    <>
      <div className="video">
        <h3 className="video__title">next videos</h3>
        <ul className="video__list">
          {videoList.map((video) => {
            return (
              <Link to={`/${video.id}`} key={video.id}>
                <div className="video__content">
                  <img
                    className="video__img"
                    src={video.image}
                    alt="selected video"
                  />

                  <div className="video__queue-items">
                    <li className="video__queue-title">{video.title}</li>
                    <li className="video__queue-channel">{video.channel}</li>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
