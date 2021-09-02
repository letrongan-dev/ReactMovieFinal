import { Route } from "react-router";
import { Fragment } from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

export const LoginTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //propsRout: Component trung gian => Component bên trong có thể điều hương trang
        return (
          <Fragment>
            <Layout>
              <Sider
                width={window.innerWidth / 2}
                style={{
                  height: window.innerHeight,
                  backgroundImage: "url(https://picsum.photos/2000)",
                  backgroundSize: "100%",
                }}
              />

              <Content>
                <Component {...propsRoute}></Component>
              </Content>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
