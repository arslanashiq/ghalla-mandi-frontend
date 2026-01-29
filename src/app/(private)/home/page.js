"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { DEFAULT_APPS } from "@/utilities/constants";
import StyledHeader from "@/components/Layout/StyledHeader";
import NavBar from "@/components/Layout/NavBar";

export default function AppsHomePage() {
  const router = useRouter();

  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100%",
      }}
    >
      <NavBar title="Home" />

      <Grid container spacing={4} justifyContent="center">
        {DEFAULT_APPS.map((app, index) => (
          <Grid key={index}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                width: 120,
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={() => router.push(app.route)}
            >
              {app.icon}
              <Typography
                noWrap
                variant="caption"
                sx={{ textAlign: "center", width: "100%" }}
                className="fw-medium"
              >
                {app.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
