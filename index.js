const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = 31;

const totalBatteries = batteryBatches.reduce((acc, curr) => acc !== 0 ? acc += curr : acc)
/* console.log(typeof totalBatteries)
console.log(totalBatteries) */