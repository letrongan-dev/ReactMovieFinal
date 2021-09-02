import { createAction } from "./index";
import { actionTypes } from "./type";
import { adminService } from "../../services/baseService";

export const fetchUserList = (dispatch) => {
  adminService
    .layDanhSachNguoiDung()
    .then((res) => {
      dispatch(createAction(actionTypes.FETCH_USER_LIST, res.data.content));
    })
    .catch((err) => {
      console.log(err);
    });
};
