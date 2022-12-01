import "./Form.scss";
import userAvatar from "../../assets/Images/Mohan-muruge.jpg";
import plusIcon from "../../assets/Icons/add_comment.svg";

export default function Form() {
  return (
    <>
      <div className="form">
        <div className="form__avatar-box">
          <img
            className="form__avatar"
            src={userAvatar}
            alt="user profile icon"
          />
        </div>

        <div className="form__submit-box">
          <label className="form__title">join the conversation</label>

          <div className="form__content">
            <textarea
              className="form__userinput"
              placeholder="Add a new comment"
              rows=""
              cols=""
            ></textarea>

            <button className="form__comment_button">
              <img
                className="form__comment-button button_icon"
                src={plusIcon}
                alt="upload button"
              />
              <span className="form__button-text">comment</span>
              <div className="form__buttonbox"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
