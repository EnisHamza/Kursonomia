import { useEffect, useState } from "react";
import Link from "next/link";

const UserNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user">
        <a className={`nav-link ${current === "/user" && "active"}`}>
          Dashboard
        </a>
      </Link>
    </div>
  );
};

export default UserNav;
