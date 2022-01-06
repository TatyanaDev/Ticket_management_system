import { Container, Stack } from "react-bootstrap";
import cn from "classnames";
import ActivityCard from "../ActivityCard";
import style from "../styles.module.css";

export default function UnreadActivityList({ data }) {
  return (
    <Stack gap={2}>
      {data.map((activity) => (
        <Container fluid className={cn(" bg-white", style.activity_card_wrap, activity.type === "Take Action" && style.unread_activity_card_wrap)} key={activity.ticket_id}>
          <ActivityCard activity={activity} />
        </Container>
      ))}
    </Stack>
  );
}
