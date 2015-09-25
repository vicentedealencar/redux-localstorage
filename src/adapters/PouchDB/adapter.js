export default (storage) => ({
  0: storage,

  put(key, value, callback) {
    storage.put(value, key)
    .then(x => callback(null, x), e => callback(e));
  },

  get(key, callback) {
    storage.get(key).then(doc => {
      callback(null, doc.value);
    }, e => callback(e));
  },

  del(key, callback) {
    storage.remove(key, callback);
  },
});
