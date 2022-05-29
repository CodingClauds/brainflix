import './VideoDescription.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

export default function VideoDescription({ selectedVideo }) {
  return (
    <>
        <section className = 'video-info__section'>
            <div className = 'video-info__content' key={selectedVideo.id}>
                <h1 className = "video-info__title">{selectedVideo.title}</h1>
                
                <ul className = "video-info__list">
                    <div className = "video-info__list-gap">
                        <li className = 'video-info__item video-info__artist'>By {selectedVideo.channel}</li>
                        
                        <li className = 'video-info__item video-info__item-icon'>
                            <div className = "video-info__container">
                                <img className = "video-info__icon" src={views} alt="views icon"></img>
                            </div>
                            
                            <span className = "video-info__item-color views">{selectedVideo.views}</span>
                        </li>
                    </div>

                    <div className = "video-info__list-gap">
                        <li className = 'video-info__item-color video-info__timestamp'>{new Date(selectedVideo.timestamp).toLocaleDateString()}</li>

                        <li className = 'video-info__item video-info__item-icon'>
                            <div className = "video-info__container">
                                <img className = "video-info__icon" src={likes} alt="likes icon"></img>
                            </div>

                            <span className = "video-info__item-color">{selectedVideo.likes}</span>
                        </li>
                    </div>
                </ul>
            </div>
            
            <div className = "video-info__content">
                <p className = "video-info__description">{selectedVideo.description}</p>
                <span className = "video-info__comment-count">3 comments</span>
            </div>
        </section>
    </>
    );
}