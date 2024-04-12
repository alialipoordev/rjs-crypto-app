import moment from "moment";

const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      date: moment(item[0]).format("MMM D"),
      [type]: item[1],
    };
  });

  return convertedData;
};
export { convertData };
