export const sortTicketId = ({ data, flag, setFlag }) => {
  data.sort((a, b) => [
    flag ? a.ticket_id - b.ticket_id : b.ticket_id - a.ticket_id
  ]);
  setFlag(flag => !flag);
};

export const sortTicketName = ({ data, flag, setFlag }) => {
  data.sort((a, b) => [
    flag
      ? a.ticket_name.localeCompare(b.ticket_name)
      : b.ticket_name.localeCompare(a.ticket_name),
  ]);
  setFlag(flag => !flag);
};

export const sortApprover = ({ data, flag, setFlag }) => {
  data.sort((a, b) => [
    flag
      ? a.approver.localeCompare(b.approver)
      : b.approver.localeCompare(a.approver),
  ]);
  setFlag(flag => !flag);
};

export const sortResolvedDate = ({ data, flag, setFlag }) => {
  data.sort((a, b) => [
    flag ? new Date(a.resolved_date) - new Date(b.resolved_date) : new Date(b.resolved_date) - new Date(a.resolved_date)
  ]);
  setFlag(flag => !flag);
};