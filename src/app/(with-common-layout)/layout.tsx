"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/src/site";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
      <h1
        style={{
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          border: "1px solid",
          borderRadius:"10px"
        }}
      >
        PH University
      </h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
        />
      </Sider>

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