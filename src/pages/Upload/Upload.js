import "./Upload.scss";
// import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <div className="divider"></div>

      <div className="upload">
        <h1 className="upload__title">upload video</h1>

        <div className="upload__content">
          <div className="upload__thumbnail">
            <label className="upload__thumbnail-label">video thumbnail</label>
            <div className="upload__placeholder"></div>
          </div>

          <div className="upload__form-content">
            <div className="upload__form-titlebox">
              <label className="upload__form-label">Title of your video</label>
              <input
                className="upload__input-title"
                action=""
                placeholder="Add a title to your video"
              ></input>
            </div>

            <div className="upload__form-infobox">
              <label className="upload__label-info">
                Add a video description
              </label>
              <input
                className="upload__input-info"
                type="text"
                name="info"
                id="info"
                action=""
                placeholder="Add a description to your video"
              ></input>
            </div>
          </div>
        </div>

        <div className="upload__btn-content">
          <button className="upload__publish">
            publish
            {/* <Link to="/">Publish</Link> */}
          </button>

          <button className="upload__cancel">cancel</button>
        </div>
      </div>
    </>
  );
}
