import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  CarryOutOutlined,
  TeamOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Context } from "../context/index";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import SubMenu from "antd/lib/menu/SubMenu";

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[current]}
      className="border-bottom border-primary border-2"
    >
      <Menu.Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<ReadOutlined />}
      >
        <Link href="/">
          <a>Kursonomia</a>
        </Link>
      </Menu.Item>

      {user && user.isInstructor && (
        <>
          {/* Show 'Become Instructor' if user is not an Instructor */}
          {!user.role.includes("Instructor") && (
            <Menu.Item
              key="/user/become-instructor"
              onClick={(e) => setCurrent(e.key)}
              icon={<TeamOutlined />}
            >
              <Link href="/user/become-instructor">
                <a>Publish Courses</a>
              </Link>
            </Menu.Item>
          )}

          {/* Show 'Create Course' if user is an Instructor */}
          {user.role.includes("Instructor") && (
            <Menu.Item
              key="/instructor/course/create"
              onClick={(e) => setCurrent(e.key)}
              icon={<CarryOutOutlined />}
            >
              <Link href="/instructor/course/create">
                <a>Create Course</a>
              </Link>
            </Menu.Item>
          )}
        </>
      )}

      {user == null && (
        <>
          <Menu.Item
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserOutlined />}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
            className="ms-auto"
          >
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Menu.Item>
        </>
      )}

      {user && user.role && user.role.includes("Instructor") && (
        <Menu.Item
          key="/instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
        >
          <Link href="/instructor">
            <a>Instructor</a>
          </Link>
        </Menu.Item>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className="ms-auto"
        >
          <Menu.ItemGroup>
            <Menu.Item key="/user" icon={<DashboardOutlined />}>
              <Link href="/user">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            <Menu.Item
              onClick={logout}
              key="/logout"
              icon={<LogoutOutlined />}
              className="ms-auto"
            >
              Logout
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      )}
    </Menu>
  );
};

export default TopNav;
