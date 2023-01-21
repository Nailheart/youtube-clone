import { format, formatDistance } from 'date-fns';

type FormatDateType = 'distance' | 'MMM dd yyyy';

const getFormattedDate = (date: string, formatDate: FormatDateType): string => {
  if (formatDate === 'distance') {
    return formatDistance(new Date(date), new Date());
  }

  return format(new Date(date), formatDate);
};

export { getFormattedDate };