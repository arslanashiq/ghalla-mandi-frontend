import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NavbarProfileMenu() {
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState();

  const navbarProfileMenuList = [
    { label: "Profile" },
    { label: "Account" },
    { label: "Dashboard" },
    {
      label: "Logout",
      handleClick: () => {
        router.replace("/auth/login");
      },
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClickMenuItem = (menuItem) => {
    handleCloseUserMenu();
    if (menuItem.handleClick) {
      return menuItem.handleClick();
    }
  };
  return (
    <Box sx={{ flexGrow: 0, py: 1 }}>
      <IconButton size="small" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar sx={{ height: 35, width: 35 }} alt="Jhon" />
      </IconButton>

      <Menu
        sx={{ mt: 5 }}
        id="menu-navbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {navbarProfileMenuList.map((menuItem) => (
          <MenuItem
            key={menuItem.label}
            onClick={() => handleClickMenuItem(menuItem)}
          >
            <Typography sx={{ textAlign: "center" }}>
              {menuItem.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default NavbarProfileMenu;
