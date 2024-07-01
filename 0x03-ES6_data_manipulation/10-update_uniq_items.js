export default function updateUniqueItems(_map) {
  if (!(_map instanceof Map)) throw new Error('Cannot process');
  _map.forEach((v, k) => {
    if (v === 1) _map.set(k, 100);
  });
  return _map;
}
