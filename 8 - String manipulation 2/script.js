'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightDetails = flights.split('+');

for (const flightDetail of flightDetails) {
  const [status, from, to, arrival] = [...flightDetail.split(';')];
  const arrivalTime = arrival.split(':');
  let output = `${status.toLowerCase().includes('delayed') ? '🔴' : ''} ${status
    .replace(status[0], '')
    .replace('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${arrivalTime[0] + 'h' + arrivalTime[1]})`;

  console.log(output.padStart(50, ' '));
}
