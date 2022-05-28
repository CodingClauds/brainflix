import './Comments.scss';

export default function Comments({ selectedVideo }) {
  return selectedVideo.comments.map((comment) => {
    return (
        <div className="comments__content" key={comment.id}>
            <div className='comments__row'>
                <div className="comments__section-left">
                    <div className="comments__avatar"></div>
                </div>
                
                <div className="comments__section-right">
                    <div className="comments__banner">
                        <div className="comments__name" key={comment.id}>{comment.name}</div>
                        <div className="comments__date" key={comment.id}>{new Date(comment.timestamp).toLocaleDateString()}</div>
                    </div>

                    <div className="comments__userinput" key={comment.id}>{comment.comment}</div>
                </div>
            </div>
        </div>
    );
  });
}
