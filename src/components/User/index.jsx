import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import {
  PlusSquareOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { fetchUserList } from "../../redux/actions/UserAction";
import { NavLink } from "react-router-dom";

function User() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList);
  }, []);

  const { userList } = useSelector((state) => state.user);
  console.log("userList", userList);
  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sortOder: "descend",
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      width: "30%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      width: "30%",

      filters: [
        {
          text: "QuanTri",
          value: "QuanTri",
        },
        {
          text: "KhachHang",
          value: "KhachHang",
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
    },

    {
      title: "Thao tác",
      dataIndex: "thaoTac",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink className="bg-success text-white mr-2 p-2" to="/home">
              <EditOutlined />
            </NavLink>
            <NavLink className="bg-danger text-white p-2" to="/home">
              <DeleteOutlined />
            </NavLink>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = userList;

  const { Search } = Input;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3>Quản lý người dùng</h3>
      <Button
        className="mb-2"
        type="primary"
        icon={<PlusSquareOutlined />}
        size="small"
      >
        Add user
      </Button>
      <Search placeholder="input search text" enterButton />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default User;
