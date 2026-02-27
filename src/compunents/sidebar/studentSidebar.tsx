import Link from "next/link";
import { UserOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const studentSidebarItems: MenuItem[] = [
  {
    key: "student-dashboard",
    icon: <UserOutlined />,
    label: <Link href="/student/dashboard">Dashboard</Link>,
  },
  {
    key: "student-profile",
    icon: <ProfileOutlined />,
    label: <Link href="/student/profile">My Profile</Link>,
  },
];