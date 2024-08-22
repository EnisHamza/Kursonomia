import { useEffect, useState } from "react";
import Link from "next/link";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2 jumbotron">
      <Link href="/instructor">
        <a
          className={`nav-link text-light ${
            current === "/instructor" && "active"
          }`}
        >
          Dashboard
        </a>
      </Link>

      <Link href="/instructor/course/create">
        <a
          className={`nav-link text-light ${
            current === "/instructor/course/create" && "active"
          }`}
        >
          Create Course
        </a>
      </Link>

      <Link href="/instructor/earning">
        <a
          className={`nav-link text-light ${
            current === "/instructor/earning" && "active"
          }`}
        >
          Earnings
        </a>
      </Link>
    </div>
  );
};

export default InstructorNav;
