function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 0) return 0;

  let totalPay = 0;
  if (hours > 8) {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * (rate * 1.5);
    totalPay = regularPay + overtimePay;
  } else {
    totalPay = hours * rate;
  }

  return Math.round(totalPay * 100) / 100;
}

module.exports = { isValidShift, calculatePay };
