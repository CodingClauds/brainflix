// import "dotenv/config";
import "./Upload.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Upload() {
  let addPost = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Button was clicked");

    let formInput = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log(formInput);

    axios
      .post("http://localhost:8080/videos", formInput)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    addPost.push("/");
  };

  return (
    <>
      <div className="divider__top"></div>

      <div className="upload">
        <h1 className="upload__title">upload video</h1>

        <div className="upload__content">
          <div className="upload__thumbnail">
            <label className="upload__thumbnail-label">video thumbnail</label>
            <div className="upload__placeholder"></div>
          </div>

          <form onSubmit={submitHandler} className="upload__form-content">
            <div className="upload__form-titlebox">
              <label className="upload__form-label">Title of your video</label>
              <input
                className="upload__input-title"
                type="text"
                name="title"
                id="title"
                action=""
                placeholder="Add a title to your video"
                required
              ></input>
            </div>

            <div className="upload__form-infobox">
              <label className="upload__label-info">
                Add a video description
              </label>
              <input
                className="upload__input-info"
                type="text"
                name="description"
                id="description"
                action=""
                placeholder="Add a description to your video"
                required
              ></input>
            </div>
            <div className="upload__btn-content">
              <button type="submit" className="upload__publish">
                publish
              </button>

              <button onclick="/" className="upload__cancel">
                cancel
              </button>
            </div>
          </form>
        </div>
        <div className="divider__bottom"></div>
      </div>
    </>
  );
}
