import { Route } from "react-router-dom";

import React, { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export const HomeTemplate = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  //props: path, exact, Component
  //bóc tách Component ra
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //propsRout: Component trung gian => Component bên trong có thể điều hương trang
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div
                  className="logo"
                  style={{
                    height: "32px",
                    margin: 16,
                    background: "rgba(255, 255, 255, 0.3)",
                  }}
                />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    User
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Film
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                    Showtime
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Header
                  className="site-layout-sub-header-background"
                  style={{ margin: 5 }}
                />
                <Content style={{ margin: "24px 16px 0" }}>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
