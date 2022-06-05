import "./VideoPlayer.scss";

export default function VideoPlayer({ selectedVideo }) {
  return (
    <>
      <div>
        <section className="videoplayer">
          <video
            className="videoplayer__frame"
            controls={true}
            src="https://project-2-api.herokuapp.com/stream?api_key=1f0806b1-00b8-4c72-a7c5-34ac52f1383f"
            poster={selectedVideo.image}
          ></video>
        </section>
      </div>
    </>
  );
}
