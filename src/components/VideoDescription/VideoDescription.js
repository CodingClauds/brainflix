import './VideoDescription.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

export default function VideoDescription({ selectedVideo }) {
  return (
    <>
        <section className = 'vid-info__section'>
            <div className = 'vid-info__content' key={selectedVideo.id}>
                <h1 className = "vid-info__title">{selectedVideo.title}</h1>
                
                <ul className = "vid-info__list">
                    <li className = 'vid-info__item artist'>{selectedVideo.channel}</li>
                    
                    <li className = 'vid-info__item'>
                        <div className = "vid-info__container">
                            <img className = "vid-info__icon" src={views} alt="views icon"></img>
                        </div>
                        
                        <span className = "vid-info__item views">{selectedVideo.views}</span>
                    </li>
                    
                    <li className = 'vid-info__item timestamp'>{new Date(selectedVideo.timestamp).toLocaleDateString()}</li>

                    <li className = 'vid-info__item'>
                        <div className = "vid-info__container">
                            <img className = "vid-info__icon" src={likes} alt="likes icon"></img>
                        </div>

                        <span className = "vid-info__likes">{selectedVideo.likes}</span>
                    </li>
                </ul>
            </div>
            
            <div className = "vid-info__content">
                <p className = "vid-info__description">{selectedVideo.description}</p>
                <span className = "vid-info__comment-count">3 comments</span>
            </div>
        </section>
    </>
    );
}