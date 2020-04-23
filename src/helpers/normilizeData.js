import { convertToReadableDate } from './utils';

const normalizeData = data => {
  const newData = data.reduce((normalizedData, currentValue) => {
    if (!normalizedData.length) {
      const firstPart = {
        title: convertToReadableDate(currentValue.createdAt),
        data: [{ ...currentValue }]
      };

      normalizedData.push(firstPart);
      return normalizedData;
    }
    for (let i = 0; i < normalizedData.length; i += 1) {
      if (
        normalizedData[i].title ===
        convertToReadableDate(currentValue.createdAt)
      ) {
        normalizedData[i].data.push(currentValue);
        return normalizedData;
      }
    }
    const nextValue = {
      title: convertToReadableDate(currentValue.createdAt),
      data: [currentValue]
    };
    normalizedData.push(nextValue);
    return normalizedData;
  }, []);
  return newData;
};

export default normalizeData;
