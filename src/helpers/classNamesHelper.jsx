export const classNames = (defaultClasses, obj) => {
  for (let key in obj) {
    if (obj[key]) defaultClasses = defaultClasses + " " + obj[key];
  }
  return defaultClasses;
};
