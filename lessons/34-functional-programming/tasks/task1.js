const createValidation = (...validator) => (value) => {
  const result = validator.reduce((prev,item) => {
    return [...prev, item(value)];
  }, [])
  .filter((item) => item)
  return result.length > 0 ? result : null
}

const createValidator = (validatorFunc, errorMessage) => (value) => {
  return validatorFunc(value) ? null : errorMessage
}

const hasEmail = (email) => {
  return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

const hasNoEmpty = (email) => {
  return email.trim()
}

const hasAdult = (age) => {
  return age >= 18
}

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
}
