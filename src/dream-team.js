module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false; 
  return members.map(v => 
      typeof v !== "string" ? "" : 
      v.trim()
      .toUpperCase()[0])
      .sort()
      .join("")

};











function createDreamTeam(/* members */) {
  throw 'Not implemented';
  // remove line with error and write your code here
};