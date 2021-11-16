'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Create an array 'events' of the different game events that happened (no duplicates)
const uniqueGameEventArray = [...new Set([...gameEvents.values()])];
console.log(`Unique Events are as follows: ${[...uniqueGameEventArray]}`);

// Remove event from minute 64
const keyOfEventToRemove = 64;
gameEvents.delete(keyOfEventToRemove);
console.log(`Event at minute ${keyOfEventToRemove} was removed`);

// Compute and log the average time an event happened
const avgEvent = 90 / (gameEvents.size + 1);
console.log(
  `An event happened, on average, every ${avgEvent} minute${
    avgEvent > 1 ? 's' : ''
  }`
);

// Loop over gameEvents and log each element to the console marking whether it's in the first (0~44 mins) or second half (45 min onwards)
for (const [min, event] of gameEvents) {
  console.log(`[${min > 44 ? 'SECOND' : 'FIRST'} HALF] ${min}: ${event}`);
}
