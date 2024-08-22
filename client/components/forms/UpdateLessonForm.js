import { Button, Progress, Switch } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import ReactPlayer from "react-player";

const UpdateLessonForm = ({
  current,
  setCurrent,
  handleUpdateLesson,
  uploading,
  uploadVideoButtonText,
  handleVideo,
  progress,
}) => {
  return (
    <div className="container pt-3">
      <form onSubmit={handleUpdateLesson}>
        <input
          type="text"
          className="form-control square"
          onChange={(e) => setCurrent({ ...current, title: e.target.value })}
          value={current.title}
          autoFocus
          required
        />

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setCurrent({ ...current, content: e.target.value })}
          value={current.content}
        ></textarea>

        <div className="d-flex justify-content-center">
          {!uploading && current.video && current.video.Location && (
            <div className="pt-2 d-flex justify-content-center">
              <ReactPlayer
                url={current.video.Location}
                width="380px"
                height="180px"
                controls
              />
            </div>
          )}
        </div>
        <label className="btn btn-secondary btn-block mt-3 col-12">
          {uploadVideoButtonText}
          <input onChange={handleVideo} type="file" accept="video/*" hidden />
        </label>

        {progress > 0 && (
          <Progress
            className="d-flex justify-content-center pt-2"
            percent={progress}
            steps={9}
          />
        )}

        <div className="d-flex justify-content-between">
          <p className="pt-3">Preview</p>
          <Switch
            className="float-right mt-2"
            disabled={uploading}
            checked={current.free_preview}
            name="free_preview"
            onChange={(v) => setCurrent({ ...current, free_preview: v })}
          />
        </div>
      </form>
      <Button
        onClick={handleUpdateLesson}
        className="col mt-3 d-grid col-8 mx-auto"
        size="large"
        type="primary"
        loading={uploading}
        shape="round"
      >
        Save
      </Button>
    </div>
  );
};

export default UpdateLessonForm;
