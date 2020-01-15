// Code your solution here
function findMatching(drivers,strToMatch){
 return drivers.filter(s=>s.toLowerCase()==strToMatch.toLowerCase());
}
function fuzzyMatch(drivers,strToMatch){
 return drivers.filter(s=>s.startsWith(strToMatch));
}
function matchName(drivers,strToMatch){
 return drivers.filter(s=>s.name==strToMatch);
}