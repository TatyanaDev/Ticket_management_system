import { Form } from "react-bootstrap";
import FooterWithTwoButtons from "../FooterWithTwoButtons";
import Header from "../Header";
import Story from "./Story";
import Task from "./Task";
import Bug from "./Bug";

export default function TicketOutcome({ ticketType, activeStep, onBack, onCreate, outcome, setOutcome, resources, setResources, additionalRequirements, setAdditionalRequirements, testingEnvironment, setTestingEnvironment, stepsReproduce, setStepsReproduce }) {
  const content = (ticketType) => {
    switch (ticketType) {
      case "Story":
        return <Story activeStep={activeStep} outcome={outcome} setOutcome={setOutcome} resources={resources} setResources={setResources} />;
      case "Bug":
        return <Bug activeStep={activeStep} resources={resources} setResources={setResources} stepsReproduce={stepsReproduce} setStepsReproduce={setStepsReproduce} testingEnvironment={testingEnvironment} setTestingEnvironment={setTestingEnvironment} />;
      case "Task":
        return <Task activeStep={activeStep} resources={resources} setResources={setResources} additionalRequirements={additionalRequirements} setAdditionalRequirements={setAdditionalRequirements} />;
      default:
        return <Story activeStep={activeStep} outcome={outcome} setOutcome={setOutcome} resources={resources} setResources={setResources} />;
    }
  };

  return (
    <>
      <Header title='Just A Little More...' description='What should we do to make it happen?' />
      <Form className='d-flex flex-column flex-grow-1'>
        {content(ticketType)}
        <FooterWithTwoButtons primaryButtonTitle='Create' secondaryButtonTitle='Back' primaryButtonClick={onCreate} secondaryButtonClick={onBack} />
      </Form>
    </>
  );
}
