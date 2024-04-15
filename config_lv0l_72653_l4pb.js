2 + false
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const getRandomSubset = (array, size) => array.slice(0, size);
const getUniqueValues = array => [...new Set(array)];

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

