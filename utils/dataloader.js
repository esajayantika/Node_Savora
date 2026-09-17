const fs = require("fs");
const path = require("path");

const loadSelection = () => {
  const filePath = path.join(__dirname, "../data/selection.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);
  return json;
};

module.exports = { loadSelection };
