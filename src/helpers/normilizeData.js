import moment from "moment";

const calculateSectionTitle = input => {
  const date = moment(parseInt(input, 10)).format("MMM Do YYYY");

  return date;
};
const normalizeData = data => {
  const newData = data.reduce((normalizedData, currentValue) => {
    if (!normalizedData.length) {
      const firstPart = {
        title: calculateSectionTitle(currentValue.createdAt),
        data: [{ ...currentValue }]
      };

      normalizedData.push(firstPart);
      return normalizedData;
    }
    for (let i = 0; i < normalizedData.length; i += 1) {
      if (
        normalizedData[i].title ===
        calculateSectionTitle(currentValue.createdAt)
      ) {
        normalizedData[i].data.push(currentValue);
        return normalizedData;
      }
    }
    const nextValue = {
      title: calculateSectionTitle(currentValue.createdAt),
      data: [currentValue]
    };
    normalizedData.push(nextValue);
    return normalizedData;
  }, []);
  return newData;
};

export default normalizeData;
