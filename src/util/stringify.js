module.exports = (obj) => {
  var seen = [];

  return JSON.stringify(obj, (key, val) => {
    if (val != null && typeof val == "object") {
      if (seen.indexOf(val) >= 0)
        return;

      seen.push(val);
    }
    return val;
  });
};
