import Link from "next/link";
import { TeamOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const facultySidebarItems: MenuItem[] = [
  {
    key: "faculty-dashboard",
    icon: <TeamOutlined />,
    label: <Link href="/faculty/dashboard">Dashboard</Link>,
  },
  {
    key: "faculty-profile",
    icon: <ProfileOutlined />,
    label: <Link href="/faculty/profile">My Profile</Link>,
  },
];