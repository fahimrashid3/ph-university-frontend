"use client";

import Sidebar from "@/src/compunents/sidebar/Sidebar";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = "admin";

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar role={role} />

      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          PH University ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}