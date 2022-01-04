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

export const namePreparation = (strName) => {
  return strName.split(" ").map((n) => n[0]).join().replace(',', '');
} 