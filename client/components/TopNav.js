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
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <Menu
      mode="horizontal"
      className="border-bottom border-dark border-1"
      style={{ backgroundColor: "black" }}
    >
      <Menu.Item key="/">
        <Link href="/">
          <img
            src="images/llogo.png"
            style={{ height: "40px", width: "250px" }}
          />
        </Link>
      </Menu.Item>

      {user && user.isInstructor && (
        <>
          {/* Show 'Become Instructor' if user is not an Instructor */}
          {!user.role.includes("Instructor") && (
            <Menu.Item
              key="/user/become-instructor"
              className="text-white"
              icon={<TeamOutlined />}
            >
              <Link href="/user/become-instructor">
                <a className="text-white">Publish Courses</a>
              </Link>
            </Menu.Item>
          )}

          {/* Show 'Create Course' if user is an Instructor */}
          {user.role.includes("Instructor") && (
            <Menu.Item
              key="/instructor/course/create"
              className="text-white"
              icon={<CarryOutOutlined />}
            >
              <Link href="/instructor/course/create">
                <a className="text-white">Create Course</a>
              </Link>
            </Menu.Item>
          )}
        </>
      )}

      {user == null && (
        <>
          <Menu.Item
            key="/login"
            className="text-white"
            icon={<UserOutlined />}
          >
            <Link href="/login">
              <a className="text-white">Login</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="/register"
            icon={<UserAddOutlined />}
            className="ms-auto text-white"
          >
            <Link href="/register">
              <a className="text-white">Register</a>
            </Link>
          </Menu.Item>
        </>
      )}

      {user && user.role && user.role.includes("Instructor") && (
        <Menu.Item
          key="/instructor"
          className="text-white"
          icon={<TeamOutlined />}
        >
          <Link href="/instructor">
            <a className="text-white">Instructor</a>
          </Link>
        </Menu.Item>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className="ms-auto text-white"
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
