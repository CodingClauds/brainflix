import './VideoQueue.scss';

export default function VideoQueue({ videoList, clickedVideo }) {
  console.log(videoList);

  return (
    <>
        <div className="video__queue">
            <h3 className='video__title'>next videos</h3>
            
            <ul className="video__list">
                {videoList.map((video) => {
                return (
                    <div className="video__content" key={video.id}>
                        <img className="video__img" onClick={() => clickedVideo(video.id)} src={video.image} alt="clicked video content" />
                        <li className="video__item">{video.title}</li>
                    </div>
                    )
                })};
            </ul>
        </div>
    </>
  );
}