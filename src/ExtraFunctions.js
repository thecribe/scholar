export const filterArray = (array, searchfield) => {
  let newarr = [];
  if (
    searchfield.faculty === "default" &&
    searchfield.department === "default"
  ) {
    return array;
  } else {
    array.forEach((e) => {
      if (
        searchfield.faculty === e.faculty &&
        searchfield.department === "default"
      ) {
        newarr.push(e);
      } else if (
        searchfield.faculty === e.faculty &&
        searchfield.department === e.department
      ) {
        newarr.push(e);
      }
    });
  }

  return newarr;
};

export const searchArray = (arr, searchfield) => {
  let newarray = [];
  if (searchfield.length === 0) return arr;

  arr.forEach((e) => {
    if (e.name.toLowerCase().includes(searchfield.toLowerCase())) {
      newarray.push(e);
    }
  });

  return newarray;
};
