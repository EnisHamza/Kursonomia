import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const Index = ({ courses = [] }) => {
  // Since `courses` is passed as a prop, it will default to an empty array if it's undefined

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
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="col-md-4">
                <div className="course-card">
                  <CourseCard course={course} />
                </div>
              </div>
            ))
          ) : (
            <p>No courses available</p> // Handle case when there are no courses
          )}
        </div>
      </div>
    </>
  );
};

/*export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${process.env.API}/courses`);
    return {
      props: {
        courses: data || [], // Default to an empty array if `data` is undefined
      },
    };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return {
      props: {
        courses: [], // Return an empty array if the fetch fails
      },
    };
  }
}*/

export default Index;
