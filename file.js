const fs = require("fs");

const readProducts = () => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};

const createProducts = async (data) => {
  try {
    const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
    const oldData = JSON.parse(json);
    oldData.push(data);
    await fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
    return data;
  } catch (error) {
    alert("Error: Creating Product");
    throw error;
  }
};

const updateProducts = (id, data) => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  let oldData = JSON.parse(json);
  const dataToUpdate = oldData.find((element) => element.id === id);
  oldData = oldData.filter((element) => element.id !== id);
  oldData.push({ ...dataToUpdate, ...data });
  fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
};

const deleteProducts = (id, data) => {
  try {
    const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
    const oldData = JSON.parse(json);
    const newData = oldData.filter((element) => element.id !== id);
    fs.writeFileSync("MOCK_DATA.json", JSON.stringify(newData));
    return data;
  } catch (error) {
    alert("Error deleting product");
  }
};

module.exports = { readProducts, createProducts, deleteProducts };
