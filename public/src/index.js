let btn = document.querySelector("#search-button");
let form = document.querySelector("#search-form");
btn.addEventListener("click", event => {
  event.preventDefault();
  window.location.assign(`${window.location.origin}/weather/${form.value}`);
});
