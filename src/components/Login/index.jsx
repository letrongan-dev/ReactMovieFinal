import React from "react";
import { Input, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function Login() {
  return (
    <form className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="mb-5"> Login Admin</h3>
        <Input
          className="mb-5"
          name="email"
          style={{ width: "50%" }}
          size="large"
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />

        <Input
          className="mb-5"
          name="matKhau"
          style={{ width: "50%" }}
          size="large"
          placeholder="Enter your password"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />

        <Button className="mb-5" type="primary">
          Log In
        </Button>

        <div className="social">
          <Button
            className="mr-3"
            type="primary"
            shape="circle"
            icon={<TwitterOutlined />}
            size={"large"}
          />

          <Button
            shape="circle"
            icon={<InstagramOutlined />}
            size={"large"}
            style={{ backgroundColor: "#C62E90" }}
          />
        </div>
      </div>
    </form>
  );
}
