import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://kursonomia-server.onrender.com/api/user-courses"
      );
      setCourses(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <UserRoute>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-danger p-5"
        />
      )}
      <h1 className="p-5 jumbotron text-center bg-primary">User Dashboard</h1>

      {courses &&
        courses.map((course) => (
          <div key={course._id} className="media pt-2 pb-1">
            <Avatar
              size={80}
              shape="rounded"
              src={course.image ? course.image.Location : "/course.png"}
            />

            <div className="media-body">
              <div className="row">
                <div className="col">
                  <Link
                    href={`/user/course/${course.slug}`}
                    className="pointer"
                  >
                    <a>
                      <h5 className=" h3 mt-2 text-primary">{course.name}</h5>
                    </a>
                  </Link>
                  <p style={{ marginTop: "-10px" }}>
                    {course.lessons.length} Lessons
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-12px", fontSize: "12px" }}
                  >
                    {" "}
                    By {course.instructor.name}
                  </p>
                </div>
                <div className="col-md-3 mt-1 text-center">
                  <Link
                    href={`/user/course/${course.slug}`}
                    className="pointer"
                  >
                    <a>
                      <PlayCircleOutlined className="h2 pointer text-danger" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      {/*<pre>{JSON.stringify(courses, null, 4)}</pre>*/}
    </UserRoute>
  );
};

export default UserIndex;
