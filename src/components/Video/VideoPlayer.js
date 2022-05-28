import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  console.log(selectedVideo);
  return (
    <div>
      <section className="video">
        <video className="video__frame" controls poster={selectedVideo}></video>
      </section>
    </div>
  );
}

export default VideoPlayer; 