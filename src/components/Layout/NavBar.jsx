"use client";

import React from "react";
import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import { useRouter } from "next/navigation";
// icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
// components
import NavbarProfileMenu from "./NavbarProfileMenu";
import StyledHeader from "./StyledHeader";
import { Home } from "@mui/icons-material";

function NavBar({
  showBackButton = false,
  showHomeButton = false,
  handleClickBack = null,
  title = "Ghalla Mandi",
  children = null,
}) {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const router = useRouter();

  const handleBack = () => {
    if (!handleClickBack) {
      return router.back();
    }
    handleClickBack();
  };
  const handleGoToHomePage = () => {
    router.push("/home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0} // remove shadow
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // semi-transparent
          backdropFilter: "blur(10px)", // frosted glass effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
          boxShadow: "none", // remove default shadow
        }}
      >
        <Toolbar
          variant="dense"
          className="w-100 d-flex justify-content-between"
        >
          <Box className="d-flex align-items-center ">
            <ButtonGroup>
              {showBackButton && (
                <IconButton
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  onClick={handleBack}
                  className="me-2"
                >
                  {isRTL ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              )}
              {showHomeButton && (
                <IconButton
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="me-2"
                  onClick={handleGoToHomePage}
                >
                  <Home />
                </IconButton>
              )}
            </ButtonGroup>
            <Typography
              variant="h6"
              sx={{ color: "text.primary" }}
              className="fw-bold"
            >
              {title || ""}
            </Typography>
          </Box>

          {children}

          <NavbarProfileMenu />
        </Toolbar>
      </AppBar>
      <StyledHeader />
    </Box>
  );
}

export default NavBar;
