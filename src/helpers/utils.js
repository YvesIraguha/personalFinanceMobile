export const convertToHours = input => {
  const newDate = new Date(parseInt(input, 10));
  const hours = newDate.getHours();
  const isAfterNoon = hours > 12 ? hours - 12 : hours;
  const hourPart = isAfterNoon < 10 ? `${`0${isAfterNoon}`}` : isAfterNoon;
  const amOrPm = hours < 12 ? "AM" : "PM";
  const minutes = newDate.getMinutes();
  const minutesFormat = minutes > 10 ? minutes : `${`0${minutes}`}`;
  return `${hourPart}:${minutesFormat} ${amOrPm}`;
};

export const capitalizeString = input => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};
