import { Dashboard, People, AccountBalance, Person } from "@mui/icons-material";

const defaultAppProps = {
  color: "primary",
  sx: { fontSize: 50 },
};
export const DEFAULT_APPS = [
  {
    title: "Dashboard",
    icon: <Dashboard {...defaultAppProps} />,
    route: "/dashboard",
  },
  {
    title: "Customers",
    icon: <People {...defaultAppProps} />,
    route: "/customers",
  },
  {
    title: "Employees",
    icon: <Person {...defaultAppProps} />,
    route: "/employees",
  },
  {
    title: "Accounting",
    icon: <AccountBalance {...defaultAppProps} />,
    route: "/accounting",
  },
];
