export default function hasValuesFromArray(_set, _arr) {
  for (const arrItem of _arr) {
    if (!_set.has(arrItem)) {
      return false;
    }
  }
  return true;
}
