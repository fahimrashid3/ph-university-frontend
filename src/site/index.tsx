import Link from "next/link";
import {
  UploadOutlined,
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  BookFilled,
  BookTwoTone,
  DashboardOutlined,
} from "@ant-design/icons";

export const sidebarItems = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "manage-user",
    icon: <UserOutlined />,
    label: "Manage User",
    children: [
      {
        key: "create-admin",
        icon: <UserOutlined />,
        label: <Link href="/admin/create-admin">Create Admin</Link>,
      },
      {
        key: "create-faculty",
        icon: <TeamOutlined />,
        label: <Link href="/admin/create-faculty">Create Faculty</Link>,
      },
      {
        key: "create-student",
        icon: <UploadOutlined />,
        label: <Link href="/admin/create-student">Create Student</Link>,
      },
    ],
  },
  {
    key: "manage-course",
    icon: <BookTwoTone />,
    label: "Manage Course",
    children: [
      {
        key: "offered-course",
        icon: <BookFilled />,
        label: <Link href="/admin/offered-course">Offered Course</Link>,
      },
      {
        key: "manage-course",
        icon: <BookOutlined />,
        label: <Link href="/admin/manage-course">Manage Course</Link>,
      },
      {
        key: "create-course",
        icon: <UploadOutlined />,
        label: <Link href="/admin/create-course">Create Course</Link>,
      },
    ],
  },
];