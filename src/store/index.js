import { EventEmitter } from 'events';
// import { Promise } from 'es6-promise'

const store = new EventEmitter()

export default store;

// jsonp
// store.jsonp = (url, callback) => {

//   let node = document.createElement('script');

//   node.src = url;
//   document.body.appendChild(node);

//   window.jsonpCallback = callback;
// }



