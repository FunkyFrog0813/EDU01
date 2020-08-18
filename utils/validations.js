let required = propertyType => {
  return v => (v && v.length > 0) || `You must input a ${propertyType}`;
};

let minLength = (propertyType, min) => {
  return v => (v && v.length >= min) || `${propertyType} must exceed ${min}`;
};

let maxLength = (propertyType, max) => {
  return v => (v && v.length >= min) || `${propertyType} must exceed ${min}`;
};

export { required, minLength, maxLength };
