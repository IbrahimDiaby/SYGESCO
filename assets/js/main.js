document.addEventListener("DOMContentLoaded", () => {
  const searchCancel = document.querySelector(
    ".search-input-container :nth-child(3)"
  );
  const search = document.querySelector("#search");

  search.addEventListener("change", () => {
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";
  });

  search.addEventListener("keydown", (e) => {
    search.setAttribute("value", e.target.value);
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";
  });

  searchCancel.addEventListener("click", () => {
    search.value = "";
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";
  });
});

window.addEventListener("focus", () => {
  document.title = "SYGESCO | Bon retour parmi nous";
});

window.addEventListener("blur", () => {
  document.title = "SYGESCO | Vous avez quitté la page";
});
