import React from "react";
import { Routes as Rte, Route, Navigate } from "react-router-dom";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Login,
  Logout,
} from "../../../pages";
import { WithHeader } from "../../../components";

export const Routes = () => {
  return (
    <Rte>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<WithHeader />}>
        {/* Dashboard */}
        <Route path="/admin/" element={<Ecommerce />} />
        <Route path="/admin/ecommerce" element={<Ecommerce />} />

        {/* Pages */}
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/customers" element={<Customers />} />

        {/* Apps */}
        <Route path="/admin/kanban" element={<Kanban />} />
        <Route path="/admin/editor" element={<Editor />} />
        <Route path="/admin/calendar" element={<Calendar />} />
        <Route path="/admin/color-picker" element={<ColorPicker />} />

        {/* charts */}
        <Route path="/admin/line" element={<Line />} />
        <Route path="/admin/area" element={<Area />} />
        <Route path="/admin/bar" element={<Bar />} />
        <Route path="/admin/pie" element={<Pie />} />
        <Route path="/admin/financial" element={<Financial />} />
        <Route path="/admin/color-mapping" element={<ColorMapping />} />
        <Route path="/admin/pyramid" element={<Pyramid />} />
        <Route path="/admin/stacked" element={<Stacked />} />
        
        {/* Logout */}
        <Route path="/admin/logout" element={<Logout />} />
      </Route>
    </Rte>
  );
};
