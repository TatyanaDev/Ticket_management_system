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