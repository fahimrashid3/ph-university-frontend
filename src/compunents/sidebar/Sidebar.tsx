"use client";

import { Layout, Menu, Button } from "antd";
import type { MenuProps } from "antd";
import { adminSidebarItems } from "./adminSidebar";
import { facultySidebarItems } from "./facultySidebar";
import { studentSidebarItems } from "./studentSidebar";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

type SidebarProps = {
  role: "admin" | "student" | "faculty";
};

export default function Sidebar({ role }: SidebarProps) {
  let menuItems: MenuItem[] = [];

  if (role === "admin") menuItems = adminSidebarItems;
  if (role === "faculty") menuItems = facultySidebarItems;
  if (role === "student") menuItems = studentSidebarItems;

  const handleLogOut = () => {
    console.log("logout clicked");
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          height: "60px",
          lineHeight: "60px",
          color: "white",
        }}
      >
        PH University
      </h1>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={["manage-user"]}
        items={menuItems}
        style={{ paddingBottom: "80px" }} 
      />

      {/* Fixed Bottom Logout */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "16px",
          background: "#001529",
        }}
      >
        <Button danger block onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </Sider>
  );
}