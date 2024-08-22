import { currencyFormatter } from "../../utils/helpers";
import ReactPlayer from "react-player";
import { Badge, Modal, Button } from "antd";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course;
  return (
    <div className="p-4 jumbotron bg-primary mb-4">
      <div className="row m-4">
        <div className="col-md-7 mx-2">
          <h1 className="text-light font-weight-bold">{name}</h1>
          <ReactMarkdown>
            {description && description.substring(0, 160)}
          </ReactMarkdown>
          <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-4 mx-2"
          />
          <br></br>
          <p>Created By {instructor.name}</p>
          <p>Last updated {new Date(updatedAt).toLocaleDateString()}</p>
          <h4 className="text-light">
            <br></br>
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "eur",
                })
              : "Free"}
          </h4>
        </div>
        <div className="col-md-4 m-4 mx-4">
          {/*JSON.stringify(lessons[5])*/}
          {lessons[0].video && lessons[0].video.Location ? (
            <div
              className="mx-1"
              onClick={() => {
                setPreview(lessons[0].video.Location);
                setShowModal(!showModal);
              }}
            >
              <ReactPlayer
                className="react-player-div"
                url={lessons[0].video.Location}
                light={image.Location}
                width="100%"
                height="225px"
              />
            </div>
          ) : (
            <>
              <img
                src={image.Location}
                alt={name}
                className="img img-fluid m-4"
              />
            </>
          )}
          <br />
          {loading ? (
            <div className="d-flex justify-content-center">
              <LoadingOutlined className="text-warning m-4" />
            </div>
          ) : (
            <Button
              className="bg-warning"
              block
              //style={{ width: "415px" }}
              shape="round"
              icon={<SafetyOutlined />}
              size="large"
              disabled={loading}
              onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
            >
              {user
                ? enrolled.status
                  ? "Go To Course"
                  : "Enroll"
                : "Login To Enroll"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseJumbotron;
