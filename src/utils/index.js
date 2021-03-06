export const loadFromStorage = (key = '') => {
  return JSON.parse(localStorage.getItem(key));
};

export const persistInStorage = (item, key = '') => {
  const persistedData = JSON.parse(localStorage.getItem(key)) || { data: [] };
  const itemExists = persistedData.data.find((_item) => _item.id === item.id);
  if (!itemExists) {
    persistedData.data.push(item);
    localStorage.setItem(key, JSON.stringify(persistedData));
  }
};

export const generateNum = () => {
  return Math.random().toString(36).slice(2);
};

export const debounce = (cb, delay) => {
  let timer;
  return function fn(...args) {
    const ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb.apply(ctx, [...args]);
    }, delay);
  };
};
