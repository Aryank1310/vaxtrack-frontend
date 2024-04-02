import React from "react";
import { Route, Routes } from "react-router-dom";
import { User } from "../users/User";
import { Register } from "../users/Register";
import Login1 from "../users/Login1";
import OtpRegister from "../users/components/OtpRegister";

export const UserRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/*" element={<User />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login1 />}></Route>
          <Route path="/OtpRegister" element={<OtpRegister />}></Route>
        </Routes>
      </div>
    </div>
  );
};
