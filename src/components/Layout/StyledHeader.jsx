import { styled } from "@mui/material/styles";

const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  width: "100%",
  minHeight: theme.mixins.toolbar.height,
  ...theme.mixins.toolbar,
}));

export default StyledHeader;
