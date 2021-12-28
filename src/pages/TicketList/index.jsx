import TicketListLayout from "../../Components/TicketList";
import Layout from "../../Components/Layout";

export default function TicketListPage() {
  return <Layout activePageTitle='Ticket list' children={<TicketListLayout />} />;
}
