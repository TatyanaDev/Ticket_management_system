import DashboardLayout from "../../Components/Dashboard";
import Layout from "./../../Components/Shared/Layout";

export default function DashboardPage() {
  return <Layout activePageTitle='Dashboard' children={<DashboardLayout />} />;
}
