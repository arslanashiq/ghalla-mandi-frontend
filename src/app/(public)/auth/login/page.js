"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import CustomTextField from "@/components/form/CustomTextField";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.replace("/home");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          p: 3,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="start"
            className="fw-bold pb-3"
            gutterBottom
          >
            Login
          </Typography>

          <Box
            component="form"
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 4 }}
            onSubmit={handleLogin}
          >
            <CustomTextField label="Email" placeholder="Email" />
            <CustomTextField
              label="Password"
              type="password"
              placeholder="passowrd"
            />
            <Button className="fw-bold" type="submit">
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
