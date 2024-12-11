import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List, Menu } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  UploadOutlined,
  QuestionOutlined,
  CloseOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });

  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
  const [progress, setProgress] = useState(0);

  const [students, setStudents] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  useEffect(() => {
    course && studentCount();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(
      `https://kursonomia-server.onrender.com/api/course/${slug}`
    );
    setCourse(data);
  };

  const studentCount = async () => {
    const { data } = await axios.post(
      "https://kursonomia-server.onrender.com/api/instructor/student-count",
      {
        courseId: course._id,
      }
    );
    console.log("Student Count", data);
    setStudents(data.length);
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    //console.log(values);
    try {
      const { data } = await axios.post(
        `https://kursonomia-server.onrender.com/api/course/lesson/${slug}/${course.instructor._id}`,
        values
      );
      //console.log(data);
      setValues({ ...values, title: "", content: "", video: {} });
      setProgress(0);
      setUploadButtonText("Upload Video");
      setVisible(false);
      setCourse(data);
      toast("Lesson Added");
    } catch (err) {
      console.log(err);
      toast("Lesson Add Failed");
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);

      const videoData = new FormData();
      videoData.append("video", file);

      const { data } = await axios.post(
        `https://kursonomia-server.onrender.com/api/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        }
      );

      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video Upload Failed");
    }
  };

  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `https://kursonomia-server.onrender.com/api/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setValues({ ...values, video: {} });
      setProgress(0);
      setUploading(false);
      setUploadButtonText("Upload Another Video");
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast("Video Remove Failed");
    }
  };

  const handlePublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you publish the course, it will appear in the marketplace"
      );
      if (!answer) return;
      const { data } = await axios.put(
        `https://kursonomia-server.onrender.com/api/course/publish/${courseId}`
      );
      setCourse(data);
      toast("Great! Your course is now live");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  const handleUnpublish = async (e, courseId) => {
    try {
      let answer = window.confirm(
        "Once you unpublish the course, it will not be available in the marketplace"
      );
      if (!answer) return;
      const { data } = await axios.put(
        `https://kursonomia-server.onrender.com/api/course/unpublish/${courseId}`
      );
      setCourse(data);
      toast("Your course is unpublished");
    } catch (err) {
      toast("Course publish failed. Try again");
    }
  };

  return (
    <InstructorRoute>
      <div className="container-fluid pt-3">
        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />

              <div className="media-body">
                {/* Add 'd-flex justify-content-end' to push the icons to the end */}
                <div className="d-flex justify-content-end">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() =>
                        router.push(`/instructor/course/edit/${slug}`)
                      }
                      className="h4 pointer text-warning ms-3"
                    />
                  </Tooltip>

                  <Tooltip title={`${students} Enrolled`}>
                    <UserSwitchOutlined className="h4 pointer text-success ms-3" />
                  </Tooltip>

                  {course.lessons && course.lessons.length < 5 ? (
                    <Tooltip title="Min 5 lessons required to publish">
                      <QuestionOutlined className="h4 pointer text-danger ms-3" />
                    </Tooltip>
                  ) : course.published ? (
                    <Tooltip title="Unpublish">
                      <CloseOutlined
                        onClick={(e) => handleUnpublish(e, course._id)}
                        className="h4 pointer text-danger ms-3"
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Publish">
                      <CheckOutlined
                        onClick={(e) => handlePublish(e, course._id)}
                        className="h4 pointer text-success ms-3"
                      />
                    </Tooltip>
                  )}
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className="mt-2 text-primary">{course.name}</h5>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ReactMarkdown>{course.description}</ReactMarkdown>
              </div>
            </div>

            <hr />
            <div className="row">
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Add Lesson
              </Button>
            </div>
            <br />
            <Modal
              title="+ Add Lesson"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                handleVideo={handleVideo}
                progress={progress}
                handleVideoRemove={handleVideoRemove}
              />
            </Modal>

            <div className="row pb-5">
              <div className="col lesson-list">
                <h4>
                  {course && course.lessons && course.lessons.length} Lessons
                </h4>
                <List
                  itemLayout="horizontal"
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
