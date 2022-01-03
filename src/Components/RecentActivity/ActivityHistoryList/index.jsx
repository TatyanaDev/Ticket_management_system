import { Container, Stack } from "react-bootstrap";
import cn from "classnames";
import ActivityCard from "../ActivityCard";
import style from "../styles.module.css";

export default function ActivityHistoryList({ data }) {
  return (
    <Stack gap={2}>
      {data.map((activity) => (
        <Container fluid className={cn("p-3 mb-8", style.activity_card_wrap)} key={activity.ticket_id} style={{ border: "2px solid #e5e7eB", marginBottom: 8 }}>
          <ActivityCard activity={activity} />
        </Container>
      ))}
    </Stack>
  );
}
