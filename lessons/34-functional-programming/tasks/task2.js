const memoizeResultCreator = (...fnc) => {
  const cache = []
  const argsFnc = fnc.slice(0 , fnc.length - 1)
  const resultFnc = fnc[fnc.length -1]

  let isNeedToChange = false;
  let res;
  return (value) => {
    const result = argsFnc.map((paramFnc, index) => {
      if (paramFnc(value) !== cache[index]) {
        isNeedToChange = true;
      }
      return paramFnc(value);
    });

    if (isNeedToChange) {
      res = resultFnc(...result);
      cache.push(...result);
      isNeedToChange = false;
    }
    return res;
  };

}

module.exports = {
  memoizeResultCreator,
}
