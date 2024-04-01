import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Notification from "./components/NotificationVaccineCenter";
import DashboardCenter from "./components/DashboardCenter";
import NotificationVaccineCenter from "./components/NotificationVaccineCenter";
import CenterAppointments from "./components/CenterAppointments";
import VaccineInventoryForCenter from "./components/VaccineInventoryForCenter";

const menu = [
  { name: "Dashboard", path: "/vaccinecenter", icon: <DashboardIcon /> },
  {
    name: "Vaccines",
    path: "/vaccinecenter/vaccines",
    icon: <InventoryIcon />,
  },
  {
    name: "Appointments",
    path: "/vaccinecenter/appointments",
    icon: <InventoryIcon />,
  },

  {
    name: "Notification",
    path: "/vaccinecenter/notification",
    icon: <NotificationsIcon />,
  },
];
const VaccineCentersDashboard = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-[100vh]">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300  ">{drawer}</div>
        <div className="w-[85%] ">
          <Routes>
            <Route path="/" element={<DashboardCenter />}></Route>
            <Route
              path="/appointments"
              element={<CenterAppointments />}
            ></Route>
            <Route
              path="/vaccines"
              element={<VaccineInventoryForCenter />}
            ></Route>
            <Route
              path="/notification"
              element={<NotificationVaccineCenter />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default VaccineCentersDashboard;
