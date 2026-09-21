function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
HEAD
  const totalPay = hours * rate;
  return Math.round(totalPay * 100) / 100;

  if (hours > 8) {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * (rate * 1.5);
    return regularPay + overtimePay;
  }
  return hours * rate;
origin/feature/overtime-pay
}

module.exports = { isValidShift, calculatePay };
