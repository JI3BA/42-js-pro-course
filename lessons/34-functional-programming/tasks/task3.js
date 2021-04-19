const compose = (...fnc) => (value) => fnc.reduce((acc, fnc) => fnc(acc), value)
const withProps = (fnc) => (props) => fnc(props)
const branch = (isShort , trueFnc, falseFnc) => (value) => isShort(value) ? trueFnc(value) : falseFnc(value)

module.exports = {
  compose,
  withProps,
  branch,
}
