export const formatAmount = (amount: number) => {
  try {
    return new Intl.NumberFormat('en-IN', {
      currency: 'INR',
      maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
      minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
      style: 'currency',
    }).format(amount);
  } catch (error) {
    console.log(error, 'caught error while formatting amount');
    return amount;
  }
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    number,
  )
}