import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const Index = ({ courses }) => {
  //const [courses, setCourses] = useState([]);

  /*useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/courses");
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);*/

  return (
    <>
      <h1
        className="p-4 jumbotron text-center bg-primary mb-4"
        style={{ fontFamily: "Copperplate" }}
      >
        "Education is the most powerful weapon which you can use to change the
        world"
        <p
          className="div pt-4"
          style={{ fontFamily: "Papyrus", fontWeight: "bold" }}
        >
          NELSON &nbsp;&nbsp;MANDELA
        </p>
      </h1>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <div className="course-card">
                <CourseCard course={course} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
