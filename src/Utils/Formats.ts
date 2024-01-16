import dayjs from "dayjs";

export const getFormatedFullDate = (date: any) => {
  return dayjs(date).format("DD/MM/YYYY");
};
