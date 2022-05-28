import './VideoDescription.scss'
import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'


function VideoDescriptions({Description}){
  return (
    <>
    <div className='vid-info'>

         <h1 className="vid-info__title"></h1>

        <div className="vid-info__data">
            <ul>
                <li className='vid-info__artist'></li>
                <li className='vid-info__views'></li>
                <li className='vid-info__likes'> </li>
                <li className='vid-info__duration'></li>
            </ul>
            
        </div>
        
        <div className="vid-info__content">
            <p className="vid-info__description"></p>
            <p className="vid-info__count"></p>
        </div>
    </div>
    </>
    );
}

export default VideoDescriptions;