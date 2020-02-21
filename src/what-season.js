module.exports = function getSeason(date) {
  const SEASONS = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  if (date == undefined) return 'Unable to determine the time of year!'; 
  try {
    date.setHours(0, 0, 0, 0);
    return SEASONS[Math.trunc((date.getMonth() + 1) / 3)];
  } catch {
      throw new Error;
  };
};
