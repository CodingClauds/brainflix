import "./VideoPlayer.scss";

export default function VideoPlayer({ selectedVideo }) {
  console.log(selectedVideo.image);
  return (
    <>
      <div>
        <section className="videoplayer">
          <video className="videoplayer__frame" controls poster={selectedVideo.image}></video>
        </section>
      </div>
    </>
  );
}