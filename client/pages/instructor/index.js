import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const { data } = await axios.get("/api/instructor-course");
      setCourses(data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  const myStyle = { marginTop: "-15px", fontSize: "13px" };

  return (
    <InstructorRoute>
      <h1 className="p-5 jumbotron text-center bg-primary">
        Instructor Dashboard
      </h1>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course._id} className="media pt-2">
            <Avatar
              size={80}
              src={course.image ? course.image.Location : "/course.png"}
            />
            <div className="media-body pl-2">
              <div className="row">
                <div className="col">
                  <Link
                    href={`/instructor/course/view/${course.slug}`}
                    className="pointer"
                  >
                    <a className="h3 mt-2 text-primary">{course.name}</a>
                  </Link>
                  <p style={{ marginTop: "0px" }}>
                    {course.lessons.length} Lessons
                  </p>

                  {course.lessons.length < 5 ? (
                    <p style={myStyle} className="text-warning">
                      At least 5 lessons are required to publish course
                    </p>
                  ) : course.published ? (
                    <p style={myStyle} className="text-success">
                      Your course is on Marketplace
                    </p>
                  ) : (
                    <p style={myStyle} className="text-success">
                      Your course is ready to be published
                    </p>
                  )}
                </div>
                <div className="col-md-3 mt-1 text-center">
                  {course.published ? (
                    <Tooltip title="Published">
                      <CheckCircleOutlined className="h5 pointer text-success" />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Unpublished">
                      <CloseCircleOutlined className="h5 pointer text-danger" />
                    </Tooltip>
                  )}
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </InstructorRoute>
  );
};

export default InstructorIndex;
