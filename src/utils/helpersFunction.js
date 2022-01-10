import style from "../Components/TicketList/styles.module.css";

export const sortByNumbers = ({ data, flag, setFlag, setCurrentFilter, field }) => {
  data.sort((a, b) => [
    flag ? a[field] - b[field] : b[field] - a[field]
  ]);
  setCurrentFilter(field)
  setFlag(flag => !flag);
};

export const sortAlphabetically = ({ data, flag, setFlag, setCurrentFilter, field }) => {
  data.sort((a, b) => [
    flag
      ? a[field].localeCompare(b[field])
      : b[field].localeCompare(a[field]),
  ]);
  setCurrentFilter(field)
  setFlag(flag => !flag);
};

export const sortByDate = ({ data, flag, setFlag, setCurrentFilter, field }) => {
  data.sort((a, b) => [
    flag ? new Date(a[field]) - new Date(b[field]) : new Date(b[field]) - new Date(a[field])
  ]);
  setCurrentFilter(field)
  setFlag(flag => !flag);
};


export const sortByUserRole = ({ data, flag, setFlag, setCurrentFilter }) => {
  const options = {
    "User": 0,
    "Approver": 1,
    "Moderator": 2,
    "Admin": 3
  }

  data.sort((a, b) => [
    flag ? options[a.user_role[0]] - options[b.user_role[0]] : options[b.user_role[0]] - options[a.user_role[0]]
  ]);
  setCurrentFilter('user_role')
  setFlag(flag => !flag);
}


export const sortByPriority = ({ data, flag, setFlag, setCurrentFilter }) => {
  const options = {
    "Lowest": 0,
    "Low": 1,
    "Medium": 2,
    "High": 3,
    "Highest": 4
  }

  data.sort((a, b) => [
    flag ? options[a.priority] - options[b.priority] : options[b.priority] - options[a.priority]
  ]);
  setCurrentFilter('priority')
  setFlag(flag => !flag);
};

export const sortByStatus = ({ data, flag, setFlag, setCurrentFilter }) => {
  const options = {
    "Action Required": 0,
    "Backlog": 1,
    "In Progress": 2,
    "In Estimation": 3,
    "To Be Released": 4,
    "Success": 5
  }

  data.sort((a, b) => [
    flag ? options[a.status] - options[b.status] : options[b.status] - options[a.status]
  ]);
  setCurrentFilter('status')
  setFlag(flag => !flag);
};

export const styleSelection = (value) => {
  if (['Highest', 'High', 'Action Required'].includes(value)) {
    return style.highest
  } else if (['Medium', 'In Progress'].includes(value)) {
    return style.medium
  } else if (['Low', 'Lowest', 'To Be Released'].includes(value)) {
    return style.low
  } else if (value === 'Backlog') {
    return style.backlog
  } else {
    return style.success
  }
}

export const styleRoleDropdown = value => {
  if (value === 'Moderator') {
    return 'dropdown_green'
  } else if (value === 'Approver') {
    return 'dropdown_blue'
  } else if (value === 'User') {
    return 'dropdown_gray'
  } else if (value === 'Admin') {
    return 'dropdown_red'
  }
}

