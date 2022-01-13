import { Modal } from "react-bootstrap";
import { useState } from "react";
import TicketDescription from "./TicketDescription";
import TicketSubmitted from "./TicketSubmitted";
import TicketOutcome from "./TicketOutcome";
import style from "./styles.module.css";
import TicketInfo from "./TicketInfo";

export default function CreateNewTicketModal({ handleClose, show }) {
  const steps = {
    info: 1,
    decr: 2,
    outcome: 3,
    submit: 4,
  };

  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [testingEnvironment, setTestingEnvironment] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [activeStep, setActiveStep] = useState(steps.info);
  const [stepsReproduce, setStepsReproduce] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [resources, setResources] = useState("");
  const [userStory, setUserStory] = useState("");
  const [priority, setPriority] = useState(1);
  const [outcome, setOutcome] = useState("");
  const [issue, setIssue] = useState("");

  const resetFilledData = () => {
    setAdditionalRequirements("");
    setTestingEnvironment("");
    setTicketDescription("");
    setStepsReproduce("");
    setTicketTitle("");
    setResources("");
    setUserStory("");
    setPriority(1);
    setOutcome("");
    setIssue("");
  };

  const handleOnClickClose = () => {
    if (activeStep === steps.submit) {
      setActiveStep(steps.info);
      setTicketType("");
      resetFilledData();
    }
    handleClose();
  };

  const handleOnClickCancel = () => {
    setActiveStep(steps.info);
    resetFilledData();
    setTicketType("");
    handleClose();
  };

  const handleOnClickNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleOnClickCreate = () => {
    console.log("Create", {
      ticketType,
      ticketTitle,
      priority,
      ticketDescription,
      userStory,
      issue,
      outcome,
      resources,
      additionalRequirements,
      stepsReproduce,
      testingEnvironment,
    });
    setActiveStep(activeStep + 1);
  };

  const content = (activeStep) => {
    switch (activeStep) {
      case steps.info:
        return <TicketInfo activeStep={activeStep} ticketType={ticketType} ticketTitle={ticketTitle} setTicketType={setTicketType} setTicketTitle={setTicketTitle} priority={priority} setPriority={setPriority} onCancel={handleOnClickCancel} onNext={handleOnClickNext} resetFilledData={resetFilledData} />;
      case steps.decr:
        return <TicketDescription activeStep={activeStep} ticketType={ticketType} ticketDescription={ticketDescription} setTicketDescription={setTicketDescription} userStory={userStory} setUserStory={setUserStory} issue={issue} setIssue={setIssue} outcome={outcome} setOutcome={setOutcome} onNext={handleOnClickNext} onBack={() => setActiveStep(activeStep - 1)} />;
      case steps.outcome:
        return <TicketOutcome ticketType={ticketType} activeStep={activeStep} outcome={outcome} setOutcome={setOutcome} resources={resources} setResources={setResources} additionalRequirements={additionalRequirements} setAdditionalRequirements={setAdditionalRequirements} stepsReproduce={stepsReproduce} setStepsReproduce={setStepsReproduce} testingEnvironment={testingEnvironment} setTestingEnvironment={setTestingEnvironment} onBack={() => setActiveStep(activeStep - 1)} onCreate={handleOnClickCreate} />;
      case steps.submit:
        return <TicketSubmitted handleOnClickClose={handleOnClickClose} />;
      default:
        return <TicketInfo activeStep={activeStep} ticketType={ticketType} ticketTitle={ticketTitle} setTicketType={setTicketType} setTicketTitle={setTicketTitle} priority={priority} setPriority={setPriority} onCancel={handleOnClickCancel} onNext={handleOnClickNext} resetFilledData={resetFilledData} />;
    }
  };

  return (
    <Modal show={show} onHide={handleOnClickClose} aria-labelledby='contained-modal-title-vcenter' centered className={style.container}>
      {content(activeStep)}
    </Modal>
  );
}
