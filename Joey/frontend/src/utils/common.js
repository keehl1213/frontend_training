export const createUniqueID = (array = []) => {
  const idArr = array.map((item) => item.id);
  if (idArr && idArr.length > 0) {
    return Math.max(...idArr) + 1;
  }

  return 1;
};
