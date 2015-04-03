var React = require('react-native');

if (window) {
  window.AsyncStorage = AsyncStorage;
}

console.log('loaded AsyncStorage');

module.exports = React.AsyncStorage;
