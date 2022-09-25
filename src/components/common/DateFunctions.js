export function getFullDate(brewDate) {
  if (brewDate !== undefined) {
    let basicDate = new Date(Date.parse(brewDate));
    const currentLocale = 'en-GB';
    let fullDate =
      basicDate.toLocaleString(currentLocale, { day: '2-digit' }) +
      '-' +
      basicDate.toLocaleString(currentLocale, { month: 'short' }) +
      '-' +
      basicDate.toLocaleString(currentLocale, { year: 'numeric' });

    return fullDate;
  }

  return '01-Jan-1976';
}
