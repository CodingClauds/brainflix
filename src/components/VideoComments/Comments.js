import "./Comments.scss";

export default function Comments({ selectedVideo }) {
  return selectedVideo.comments.map((comment) => {
    console.log(comment);
    return (
      <div className="comments" key={comment.name}>
        <div className="comments__content">
          <div className="comments__row">
            <div className="comments__section-left">
              <div className="comments__avatar"></div>
            </div>

            <div className="comments__section-right">
              <div className="comments__banner">
                <div className="comments__name">{comment.name}</div>
                <div className="comments__date">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </div>
              </div>

              <div className="comments__userinput">{comment.comment}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
