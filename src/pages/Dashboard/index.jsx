import DashboardLayout from "../../Components/Dashboard";
import Layout from "./../../Components/Layout";

export default function DashboardPage() {
  return <Layout activePageTitle='Dashboard' children={<DashboardLayout />} />;
}
