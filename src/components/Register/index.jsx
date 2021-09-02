import React from "react";
import { Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  taiKhoan: yup.string().required("This field is required!"),
  email: yup
    .string()
    .required("This field is required!")
    .email("Invalid email!"),
  soDT: yup
    .string()
    .required("This field is required!")
    .matches(/^[0-9]+$/g, "Invalid Phone number!"),
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      email: "",
      soDt: "",
    },
    // validationSchema: validationSchema
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="mb-5"> Register Admin</h3>
        <Input
          className="mb-5"
          name="taiKhoan"
          style={{ width: "50%" }}
          size="large"
          placeholder="User Name"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
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
          name="soDt"
          style={{ width: "50%" }}
          size="large"
          placeholder="Số Điện Thoại"
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
          Đăng ký
        </Button>

        <div className="social"></div>
      </div>
    </form>
  );
}
