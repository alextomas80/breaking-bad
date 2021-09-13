import { format } from "date-fns";

const getDate = (date, mask = "dd MMM yyyy") => {
  return format(new Date(date), mask);
};

export default getDate;
