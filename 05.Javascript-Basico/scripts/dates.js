/**
 * Datas
 */
//new Date(year, month, day, hours, minutes, seconds, milliseconds);
var d = new Date();
console.log(d);

d = new Date(2020, 08, 30); // year month day
console.log(d);

d = new Date(1000 * 60 * 60 * 24); // miliseconds
console.log(d);

d = new Date("sep 04 2017 23:35"); 
console.log(d);

d = new Date("02 04 2017 23:35"); 
console.log(d);

d = new Date("25/05/1999"); // Invalid format
console.log(d);

d = new Date("05/25/1999"); 
console.log(d);

d = new Date("05-25-1999"); 
console.log(d);



console.log(d.getFullYear());
console.log(d.getDate()); // dia do mês

var dias = ["sun", "mo", "tue", "we", "Thu", "Fri", "Sat"]

console.log(dias[d.getDay()]); // dia da semana

d.setDate(20);
d.setFullYear(1994);
d.setHours(20);
d.setMinutes(40);
d.setSeconds(23);
d.setMilliseconds(309);

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getMonth());
console.log(d.getTime());


