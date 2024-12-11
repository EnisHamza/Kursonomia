import { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
  CheckCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MinusCircleFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";

const SingleCourse = () => {
  const [clicked, setClicked] = useState(-1);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });
  const [completedLesssons, setCompletedLessons] = useState([]);
  const [updateState, setUpdateState] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

  useEffect(() => {
    if (course) loadCompletedLessons();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(
      `https://kursonomia-server.onrender.com/api/user/course/${slug}`
    );
    setCourse(data);
  };

  const loadCompletedLessons = async () => {
    const { data } = await axios.post(
      "https://kursonomia-server.onrender.com/api/list-completed",
      {
        courseId: course._id,
      }
    );
    console.log("Completed Lessons", data);
    setCompletedLessons(data);
  };

  const markCompleted = async () => {
    const { data } = await axios.post(
      "https://kursonomia-server.onrender.com/api/mark-completed",
      {
        courseId: course._id,
        lessonId: course.lessons[clicked]._id,
      }
    );
    console.log(data);
    setCompletedLessons([...completedLesssons, course.lessons[clicked]._id]);
  };

  const markIncompleted = async () => {
    try {
      const { data } = await axios.post(
        "https://kursonomia-server.onrender.com/api/mark-incomplete",
        {
          courseId: course._id,
          lessonId: course.lessons[clicked]._id,
        }
      );
      console.log(data);
      const all = completedLesssons;
      console.log("ALL", all);
      const index = all.indexOf(course.lessons[clicked]._id);
      if (index > -1) {
        all.splice(index, 1);
        console.log("ALL Without Remove", all);
        setCompletedLessons(all);
        setUpdateState(!updateState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StudentRoute>
      <div className="row">
        <div style={{ maxWidth: 420 }}>
          <Button
            onClick={() => setCollapsed(!collapsed)}
            className="text-primary mt-1 mb-2"
            block
          >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{" "}
            {!collapsed && "Lessons"}
          </Button>
          <Menu
            defaultSelectedKeys={[clicked]}
            inlineCollapsed={collapsed}
            style={{ height: "83vh", overflow: "scroll" }}
          >
            {course.lessons.map((lesson, index) => (
              <Menu.Item
                onClick={() => setClicked(index)}
                key={index}
                icon={<Avatar>{index + 1}</Avatar>}
              >
                {lesson.title.substring(0, 30)}{" "}
                {completedLesssons.includes(lesson._id) ? (
                  <CheckCircleFilled
                    className="float-end text-primary "
                    block
                    style={{ marginTop: "13px" }}
                  />
                ) : (
                  <MinusCircleFilled
                    className="float-end text-danger"
                    style={{ marginTop: "13px" }}
                  />
                )}
              </Menu.Item>
            ))}
          </Menu>
        </div>

        <div className="col mt-1 mx-4">
          {clicked !== -1 ? (
            <>
              <div
                className="col alert alert-warning d-flex justify-content-between align-items-center p-2"
                style={{ marginRight: "102px" }}
              >
                <b>{course.lessons[clicked].title.substring(0, 30)}</b>
                {completedLesssons.includes(course.lessons[clicked]._id) ? (
                  <span
                    className="btn p-1 btn-success m-1"
                    onClick={markIncompleted}
                  >
                    Mark As Not Completed
                  </span>
                ) : (
                  <span
                    className="btn p-1 btn-success m-1"
                    onClick={markCompleted}
                  >
                    Mark As Completed
                  </span>
                )}
              </div>

              {course.lessons[clicked].video &&
                course.lessons[clicked].video.Location && (
                  <>
                    <div className="wrapper">
                      <ReactPlayer
                        className="player"
                        url={course.lessons[clicked].video.Location}
                        width="90%"
                        height="30%"
                        controls
                        onEnded={() => markCompleted()}
                      />
                    </div>
                    <br />
                  </>
                )}
              <ReactMarkdown
                source={course.lessons[clicked].content}
                className="single-post"
              />
            </>
          ) : (
            <div className="d-flex justify-content-center p-5">
              <div className="text-center p-5">
                <PlayCircleOutlined className="text-danger display-1 p-5" />
                <p className="lead">Click on Lessons to Start Learning</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentRoute>
  );
};

export default SingleCourse;
