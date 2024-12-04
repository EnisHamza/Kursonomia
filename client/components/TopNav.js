import { useState, useEffect, useContext } from "react";
import { Menu, Drawer, Button } from "antd";
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

  // State for Drawer visibility
  const [visible, setVisible] = useState(false);

  // Toggle Drawer visibility
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <>
      {/* Large Screen Menu */}
      <div className="topnav-container">
        <Menu
          mode="horizontal"
          className="border-bottom border-dark border-1"
          style={{ backgroundColor: "black", width: "100%" }}
        >
          <Menu.Item key="/">
            <Link href="/">
              <img
                src="images/llogo.png"
                style={{ height: "40px", width: "250px" }}
                alt="Logo"
              />
            </Link>
          </Menu.Item>

          {user && user.isInstructor && (
            <>
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
                  className="ms-auto "
                >
                  Logout
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          )}
        </Menu>

        {/* Button for Drawer (visible on small screens only) */}
        <Button
          className="menu-button"
          type="primary"
          icon={<AppstoreOutlined />}
          onClick={showDrawer}
        />
      </div>

      {/* Drawer Menu for Small Screens */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={visible}
        width={250}
        bodyStyle={{ backgroundColor: "black", color: "white" }}
      >
        <Menu mode="inline" className="responsive-menu" onClick={closeDrawer}>
          {user && user.role && user.role.includes("Instructor") && (
            <Menu.Item
              key="/instructor"
              className="text-black"
              icon={<TeamOutlined />}
            >
              <Link href="/instructor">
                <a className="text-black">Instructor</a>
              </Link>
            </Menu.Item>
          )}
          {user == null && (
            <>
              <Menu.Item key="/login">
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/register">
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </Menu.Item>
            </>
          )}
          {user !== null && (
            <>
              <Menu.Item
                key="/user"
                icon={<DashboardOutlined />}
                className="text-black"
              >
                <Link href="/user">
                  <a>Dashboard</a>
                </Link>
              </Menu.Item>
              <Menu.Item
                onClick={logout}
                key="/logout"
                icon={<LogoutOutlined />}
                style={{ color: "black" }}
              >
                Logout
              </Menu.Item>
            </>
          )}
        </Menu>
      </Drawer>
    </>
  );
};

export default TopNav;
