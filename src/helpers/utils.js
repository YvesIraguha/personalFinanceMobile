import moment from 'moment';
import { AsyncStorage } from 'react-native';

export const convertToHours = input => {
  const newDate = new Date(parseInt(input, 10));
  const hours = newDate.getHours();
  const isAfterNoon = hours > 12 ? hours - 12 : hours;
  const hourPart = isAfterNoon < 10 ? `${`0${isAfterNoon}`}` : isAfterNoon;
  const amOrPm = hours < 12 ? 'AM' : 'PM';
  const minutes = newDate.getMinutes();
  const minutesFormat = minutes > 10 ? minutes : `${`0${minutes}`}`;
  return `${hourPart}:${minutesFormat} ${amOrPm}`;
};

export const capitalizeString = input => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const convertToReadableDate = input => {
  const date = moment(parseInt(input, 10)).format('MMM Do YYYY');
  return date;
};

export const getProfileImage = async () => {
  const profilePicture = await AsyncStorage.getItem('userProfile');
  const profile = await JSON.parse(profilePicture);
  return profile;
};

export const convertStatusToIcon = status => {
  if (status.toLowerCase() === 'paid') {
    return { name: 'check', color: 'green' };
  }
  if (status.toLowerCase() === 'active') {
    return { name: 'infocirlceo', color: '#8E20E3' };
  }
  return { name: 'infocirlceo', color: 'red' };
};
