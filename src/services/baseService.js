import axios from "axios";
import { domain, token, groupID, tokenCybersoft } from "../config/setting";
export class AdminService {
  layDanhSachNguoiDung = () => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };

  themNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: thongTinNguoiDung,
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  xoaNguoiDung = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}

export const adminService = new AdminService();
