const keys = Object.keys(localStorage);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = localStorage.getItem(key);
  console.log(`Khóa: ${key}, Giá trị: ${value}`);
}