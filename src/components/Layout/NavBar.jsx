"use client";

import React, { useEffect } from "react";
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
import useElementHeight from "@/hooks/useElementHeight";
import useCommon from "@/store/common";

function NavBar({
  showBackButton = false,
  showHomeButton = false,
  handleClickBack = null,
  title = "Ghalla Mandi",
  children = null,
}) {
  const theme = useTheme();
  const router = useRouter();
  const setNavBarHeight = useCommon((state) => state.setNavBarHeight);

  //
  const [navBarRef, navBarHeight] = useElementHeight();
  //
  const isRTL = theme.direction === "rtl";
  const isDarkTheme = theme.palette.mode === "dark";

  const handleBack = () => {
    if (!handleClickBack) {
      return router.back();
    }
    handleClickBack();
  };
  const handleGoToHomePage = () => {
    router.push("/home");
  };

  useEffect(() => {
    if (navBarHeight > 0) {
      setNavBarHeight(navBarHeight);
    }
  }, [navBarHeight, setNavBarHeight]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={2} // remove shadow
        sx={{
          backgroundColor: `rgba(255, 255, 255, ${isDarkTheme ? 0.2 : 0.5})`, // semi-transparent
          backdropFilter: "blur(10px)", // frosted glass effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
          boxShadow: "none", // remove default shadow
        }}
        ref={navBarRef}
      >
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1 }}>
            <Box className="w-100 d-flex justify-content-between">
              <Box className="d-flex align-items-center">
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
                <Typography variant="h6" className="fw-bold">
                  {title || ""}
                </Typography>
              </Box>

              <NavbarProfileMenu />
            </Box>

            {children}
          </Box>
        </Toolbar>
      </AppBar>
      <StyledHeader sx={{ height: navBarHeight }} />
    </Box>
  );
}

export default NavBar;
