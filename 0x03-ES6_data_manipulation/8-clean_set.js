export default function cleanSet(_set, _str) {
  let _cleanSet = '';
  if (_str === '') return _cleanSet;
  _set.forEach((element) => {
    if (element.startsWith(_str)) {
      const index = _str.length;
      if (_cleanSet !== '') _cleanSet += '-';
      _cleanSet += element.slice(index);
    }
  });
  return _cleanSet;
}
