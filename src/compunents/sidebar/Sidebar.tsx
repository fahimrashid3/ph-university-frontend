"use client";

import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { adminSidebarItems } from "./adminSidebar";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

type SidebarProps = {
  role: "admin" | "student" | "faculty";
};

export default function Sidebar({ role }: SidebarProps) {
  let menuItems: MenuItem[] = [];

  if (role === "admin") {
    menuItems = adminSidebarItems;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <h1
        style={{
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
        }}
      >
        PH University
      </h1>

      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={["manage-user"]}
        items={menuItems}
      />
    </Sider>
  );
}