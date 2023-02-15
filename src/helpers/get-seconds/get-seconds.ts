const getSeconds = (hms: string) : number => {
  const timeFormat = hms.split(':').length;

  if (timeFormat === 3) {
    const [hours, minutes, seconds] = hms.split(':');
    return (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
  }

  const [minutes, seconds] = hms.split(':');
  return (+minutes) * 60 + (+seconds);
};

export { getSeconds };