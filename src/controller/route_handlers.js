import * as database from "../model/database.js";
import * as constants from "../constants.js"

export function renderHome(request, response) {
  let randomId = getRandomId();
  if (randomId.status) {
    return response.redirect(`/problem/${randomId.id}`);
  }
  console.error(
    `Error while generating random index from home page. Random Index not present in the listOfIds: ${randomId.index}`
  );
  return response
    .status(400)
    .send("Something went wrong. Try reloading this page");
}

export function goToNext(request, response) {
  const existingId = request.params.id;
  console.log(`Existing ID: ${existingId}`);
  let nextId = getRandomId();

  while (nextId.id === existingId) {
    nextId = getRandomId();
  }

  if (nextId.status) {
    return response.redirect(`/problem/${nextId.id}`);
  }
  console.error(
    `Error while generating the next ID. Random Index not present in the ListOfIds: ${nextId.index}`
  );
  return response
    .status(400)
    .send(
      "Something went wrong. Try reloading the page or clicking the next button again."
    );
}

export function getProblem(request, response) {
  return response.render("home.mustache");
  
    let id = request.params.id;
  let problemObj = getProblemObject(id);
  if (problemObj.status) {
    const { problemTitle, problemDescription } = problemObj.data;
    return response.json({ problemTitle, problemDescription });
  }
  console.error(
    `Error while generating problem. Requested ID is not present in the database: ${id}`
  );
  return response
    .status(500)
    .send(
      `Error while generating the problem. Requested ID not present in the database ${id}`
    );
}

export function getHint(request, response) {
  let id = request.params.id;
  let problemObj = getProblemObject(id);

  if (problemObj.status) {
    const { hint } = problemObj.data;
    response.json({ hint });
  }
  return response
    .status(500)
    .send(
      `Error while generating hint. Requested ID not present in the database: ${id}`
    );
}

export function getSolution(request, response) {
  let id = request.params.id;
  let problemObj = getProblemObject(id);
  if (problemObj.status) {
    const { solution } = problemObj.data;
    response.json({ solution });
  }
  return response
    .status(500)
    .send(
      `Error while generating solution. Requested ID not present in the database: ${id}`
    );
}

function getRandomId() {
  let randomIndex = generateRandomInt(0, database.size());
  let id = database.getId(randomIndex);
  if (id) {
    return {
      status: true,
      id: id,
    };
  }
  return {
    status: false,
    index: randomIndex,
  };
}

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getProblemObject(id) {
  let data = database.getData(id);
  if (data) {
    return {
      status: true,
      data: data,
    };
  }
  return { status: false };
}
