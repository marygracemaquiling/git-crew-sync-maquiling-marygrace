function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const totalPay = hours * rate;
  return Math.round(totalPay * 100) / 100;
}

module.exports = { isValidShift, calculatePay };
