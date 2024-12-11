import { useState, useEffect } from "react";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CreateCourseForm from "../../../../components/forms/CreateCourseForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { List, Avatar, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateLessonForm from "../../../../components/forms/UpdateLessonForm";

const EditCourse = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    lessons: [],
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({});
  const [uploadVideoButtonText, setUploadVideoButtonText] =
    useState("Upload Video");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    console.log(data);
    if (data) setValues(data);
    if (data && data.image) setImage(data.image);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("Image Uploaded", data);
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try again");
      }
    });
  };

  const handleImageRemove = async () => {
    //console.log("Remove Image");
    try {
      setValues({ ...values, loading: true });
      const res = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreview("");
      setUploadButtonText("Upload Image");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast("Delete Image failed. Try again");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(values);
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast("Great! Course Updated");
      router.push("/instructor");
    } catch (err) {
      toast(err.response.data);
    }
  };

  const handleDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete lesson?");
    if (!answer) return;
    let allLessons = values.lessons;
    const removed = allLessons.splice(index, 1);
    //console.log("removed", removed[0]._id);
    //return;
    setValues({ ...values, lessons: allLessons });

    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log("Lesson Deleted", data);
  };

  const handleVideo = async (e) => {
    if (current.video && current.video.Location) {
      const res = await axios.post(
        `/api/course/video-remove/${values.instructor._id}`,
        current.video
      );
      console.log("Remove", res);
    }

    const file = e.target.files[0];
    setUploadVideoButtonText(file.name);
    setUploading(true);

    const videoData = new FormData();
    videoData.append("video", file);
    videoData.append("courseId", values._id);

    const { data } = await axios.post(
      `/api/course/video-upload/${values.instructor._id}`,
      videoData,
      {
        onUploadProgress: (e) =>
          setProgress(Math.round((100 * e.loaded) / e.total)),
      }
    );
    console.log(data);
    setCurrent({ ...current, video: data });
    setUploading(false);
  };

  const handleUpdateLesson = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(
      `/api/course/lesson/${slug}/${current._id}`,
      current
    );
    setUploadVideoButtonText("Upload Video");
    setVisible(false);
    toast("Lesson Updated");
    setValues(data);

    if (data.ok) {
      let arr = values.lessons;
      const index = arr.findIndex((el) => el._id === current._id);
      arr[index] = current;
      setValues({ ...values, lessons: arr });
      toast("Lesson Updated");
    }
  };

  return (
    <InstructorRoute>
      <h1 className="p-5 jumbotron text-center bg-primary">Edit Course</h1>
      {/*JSON.stringify(values)*/}
      <div className="pt-3 pb-3">
        <CreateCourseForm
          handleSubmit={handleSubmit}
          handleImageRemove={handleImageRemove}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          editPage={true}
        />
      </div>
      {/*<pre>{JSON.stringify(values, null, 4)}</pre>*/}
      <hr />
      {/*<pre>{JSON.stringify(image, null, 4)}</pre>*/}

      <div className="row pb-5">
        <div className="col lesson-list">
          <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
          <List
            itemLayout="horizontal"
            dataSource={values && values.lessons}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  onClick={() => {
                    setVisible(true);
                    setCurrent(item);
                  }}
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                ></List.Item.Meta>
                <DeleteOutlined
                  onClick={() => handleDelete(index)}
                  className="text-danger float-right"
                />
              </List.Item>
            )}
          ></List>
        </div>
      </div>

      <Modal
        title="Update Lesson"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {/*JSON.stringify(current)*/}
        <UpdateLessonForm
          current={current}
          setCurrent={setCurrent}
          handleVideo={handleVideo}
          handleUpdateLesson={handleUpdateLesson}
          uploadVideoButtonText={uploadVideoButtonText}
          progress={progress}
          uploading={uploading}
        />
      </Modal>
    </InstructorRoute>
  );
};

export default EditCourse;
