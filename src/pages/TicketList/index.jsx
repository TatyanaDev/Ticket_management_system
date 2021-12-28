import TicketList from "../../Components/TicketList";
// import Layout from "../../Components/Layout";
import { tickets } from "./data";

export default function TicketListPage() {
  return (
    // <Layout>
    <TicketList tickets={tickets} />
    // </Layout>
  );
}
