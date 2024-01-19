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
    data.id = Math.floor(Math.random(36) * 100000);
    console.log(oldData.id, "oldData.id");
    oldData.push(data);

    await fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
    return data;
  } catch (error) {
    alert("Error: Creating Product");
    throw error;
  }
};

const updateProducts = (id, data) => {
  try {
    const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
    let oldData = JSON.parse(json);
    const dataToUpdate = oldData.find((element) => element.id === id);
    oldData = oldData.filter((element) => element.id !== id);
    oldData.push({ ...dataToUpdate, ...data });
    fs.writeFileSync("MOCK_DATA.json", JSON.stringify(oldData));
  } catch (error) {
    console.log("Error to update");
  }
};

const deleteProducts = (id) => {
  try {
    const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
    const oldData = JSON.parse(json);
    // console.log(oldData, "oldData");
    const newData = oldData.filter(
      (element) => Number(element.id) !== Number(id)
    );
    // console.log(newData, "newData");
    fs.writeFileSync("MOCK_DATA.json", JSON.stringify(newData));
  } catch (error) {
    console.error("Error to delete");
  }
};

module.exports = { readProducts, createProducts, deleteProducts };
