"use client";
import { useRouter } from "next/navigation";
import { Grid, Card, Typography } from "@mui/material";
// components
import NavBar from "@/components/Layout/NavBar";
import PageContainer from "@/components/Layout/PageContainer";
// hooks
import useAppRoutes from "@/hooks/useAppRoutes";
function HomePage() {
  const router = useRouter();

  const { appRoutes } = useAppRoutes();
  return (
    <PageContainer>
      <NavBar title="Home" />

      <Grid container spacing={4} justifyContent="center">
        {appRoutes.map((app, index) => (
          <Grid key={index}>
            <Card
              sx={{
                p: 2,
                width: 120,
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
                backgroundColor: "rgba(255, 255, 255, 0.05)",
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
    </PageContainer>
  );
}

export default HomePage;
