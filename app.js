const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2022, 11, 5), 100);
  return `${newDate.getDate()}-${newDate.getMonth() + 1}-
  ${newDate.getFullYear()}`;
};
module.exports = getDateAfterXDays;

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = newDate();
  response.send(getDateAfterXDays());
});
app.listen(3000);

module.exports = app;
