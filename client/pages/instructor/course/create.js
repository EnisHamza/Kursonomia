import { useState } from "react";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import CreateCourseForm from "../../../components/forms/CreateCourseForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const CreateCourse = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    video: {},
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const router = useRouter();

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
        let { data } = await axios.post(
          "https://kursonomia-server.onrender.com/api/course/upload-image",
          {
            image: uri,
          }
        );
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
      const res = await axios.post(
        "https://kursonomia-server.onrender.com/api/course/remove-image",
        { image }
      );
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
      const { data } = await axios.post(
        "https://kursonomia-server.onrender.com/api/course",
        {
          ...values,
          image,
        }
      );
      toast("Great! Now you can start the lessons");
      router.push("/instructor");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <InstructorRoute>
      <h1 className="p-5 jumbotron text-center bg-primary">Create Course</h1>
      <div className="pt-3 pb-3">
        <CreateCourseForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          handleImageRemove={handleImageRemove}
        />
      </div>
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <hr />
      <pre>{JSON.stringify(image, null, 4)}</pre>
    </InstructorRoute>
  );
};

export default CreateCourse;
