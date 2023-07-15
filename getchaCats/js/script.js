const url = "https://api.thecatapi.com/v1/images/search";

const btGetCats = document.getElementById("btGetCats");
const inCats = document.getElementById("inCats");
const inLoading = document.getElementById("inLoading");
const loading = false;

const getCats = async () => {
  let loading = true;
  if (loading) {
    inLoading.textContent = "Carregando...";
  }
  try {
    const res = await fetch(url);
    const data = await res.json();

    inLoading.textContent = "";

    inCats.src = data[0].url;
  } catch {
    console.log("erro");
  }
};

btGetCats.addEventListener("click", getCats);
