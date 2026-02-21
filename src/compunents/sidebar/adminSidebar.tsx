import Link from "next/link";
import { UserOutlined, TeamOutlined, UploadOutlined } from "@ant-design/icons";

export const adminSidebarItems = [
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
];