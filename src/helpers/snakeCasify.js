export default function snakeCasify(object) {
  let modelParam = Object.keys(object)[0];
  let keyAndValues = Object.entries(object[modelParam]);
  let snakeCasified = keyAndValues.map((keyAndValue) =>
    snakeCasifier(keyAndValue)
  );
  const obj = snakeCasified.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  return { [modelParam]: obj };
}

function snakeCasifier(keyAndValue) {
  let key = keyAndValue[0];
  let snakeCased = "";
  for (let char of key) {
    if (char !== char.toLowerCase()) {
      snakeCased += `_${char.toLowerCase()}`;
    } else {
      snakeCased += char;
    }
  }
  keyAndValue[0] = snakeCased;
  return keyAndValue;
}
