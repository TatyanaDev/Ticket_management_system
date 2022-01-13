import { Form } from "react-bootstrap";
import FooterWithTwoButtons from "../FooterWithTwoButtons";
import Header from "../Header";
import Story from "./Story";
import Task from "./Task";
import Bug from "./Bug";

export default function TicketDescription({ ticketType, activeStep, onNext, onBack, setTicketDescription, setUserStory, ticketDescription, userStory, issue, setIssue, outcome, setOutcome }) {
  const content = (ticketType) => {
    switch (ticketType) {
      case "Story":
        return <Story activeStep={activeStep} setTicketDescription={setTicketDescription} ticketDescription={ticketDescription} userStory={userStory} setUserStory={setUserStory} />;
      case "Bug":
        return <Bug activeStep={activeStep} setTicketDescription={setTicketDescription} ticketDescription={ticketDescription} issue={issue} setIssue={setIssue} outcome={outcome} setOutcome={setOutcome} />;
      case "Task":
        return <Task activeStep={activeStep} setTicketDescription={setTicketDescription} ticketDescription={ticketDescription} outcome={outcome} setOutcome={setOutcome} />;
      default:
        return <Story activeStep={activeStep} setTicketDescription={setTicketDescription} ticketDescription={ticketDescription} userStory={userStory} setUserStory={setUserStory} />;
    }
  };

  return (
    <>
      <Header title=' Information' description='We need a bit more information to understand you better' />
      <Form className='d-flex flex-column flex-grow-1'>
        {content(ticketType)}
        <FooterWithTwoButtons primaryButtonTitle='Next' secondaryButtonTitle='Back' secondaryButtonClick={onBack} primaryButtonClick={onNext} />
      </Form>
    </>
  );
}
