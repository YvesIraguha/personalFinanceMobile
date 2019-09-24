export const validateInputs = (name, value) => {
  const errors = {};
  switch (name) {
    case 'type':
      errors.type = value.length < 2 && 'Invalid type';
      break;
    case 'quantity':
      errors.quantity = value && isNaN(value) && 'Quantity should be a number';
      break;
    case 'price':
      errors.price = isNaN(value) && 'Price should be a valid money';
      break;
    default:
      break;
  }
  return errors;
};

export const validateExpense = expense => {};
