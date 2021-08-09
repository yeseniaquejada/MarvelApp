import { data } from "./data/data.js";

const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
document.addEventListener("DOMContentLoaded", () => {
  loadData(data);
});

const loadData = (data) => {
  data.forEach((personaje) => {
    const { id, name, image } = personaje;
    templateCard.querySelector("h5").textContent = name;
    templateCard.querySelector("img").setAttribute("src", image);
    templateCard.querySelector(".btn-dark").dataset.id = id;
    templateCard.querySelector(".btn-danger").dataset.id = id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });

  items.appendChild(fragment);
};

items.addEventListener("click", (e) => {
  addLike(e);
});

items.addEventListener("click", (e) => {
  disLike(e);
});

const addLike = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setLike(e.target.parentElement);
  }
};

const disLike = (e) => {
  if (e.target.classList.contains("btn-danger")) {
    setDisLike(e.target.parentElement);
  }
};

const setLike = (object) => {
  const label = object.querySelector("#like");
  let cantidad = Number(label.textContent) || 0;
  cantidad++;
  label.textContent = cantidad;
};

const setDisLike = (object) => {
  const label = object.querySelector("#disLike");
  let cantidad = Number(label.textContent) || 0;
  cantidad++;
  label.textContent = cantidad;
};
