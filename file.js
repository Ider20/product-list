const fs = require("fs");

const readProducts = () => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};

const createProducts = (data) => {
  fs.readFileSync("MOCK_DATA.json", "utf-8", (err, json) => {
    const oldData = JSON.parse(json);
    oldData.push(data);
    fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
  });
  return data;
};

constupdateProducts = (id, data) => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  let oldData = JSON.parse(json);
  const dataToUpdate = oldData.find((element) => element.id === id);
  oldData = oldData.filter((element) => element.id !== id);
  oldData.push({ ...dataToUpdate, ...data });
  fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
};
module.exports = { readProducts, createProducts };
