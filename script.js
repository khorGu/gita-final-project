// Fetch coin prices
var coinData = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20ripple%2C%20solana%2C%20cardano%2C%20polkadot%2C%20dogecoin%2C%20%20avalanche-2%2C%20tron&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  method: "GET",
  headers: {},
};

$.ajax(coinData).done((response) => {
  const btc = response[0];
  const eth = response[1];
  const bnb = response[2];
  const sol = response[5];
  const dot = response[7];
  // Assign Values
  $("#btc-name").text(btc.name);
  $("#btc-price").text("$ " + btc.current_price);
  $("#btc-img").attr("src", btc.image);
  $("#eth-name").text(eth.name);
  $("#eth-price").text("$ " + eth.current_price);
  $("#eth-img").attr("src", eth.image);
  $("#bnb-name").text(bnb.name);
  $("#bnb-price").text("$ " + bnb.current_price);
  $("#bnb-img").attr("src", bnb.image);
  $("#sol-name").text(sol.name);
  $("#sol-price").text("$ " + sol.current_price);
  $("#sol-img").attr("src", sol.image);
  $("#dot-name").text(dot.name);
  $("#dot-price").text("$ " + dot.current_price);
  $("#dot-img").attr("src", dot.image);
});
// Fetch Exchanges

var exchangesData = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/exchanges?per_page=3",
  method: "GET",
  headers: {},
};

$.ajax(exchangesData).done((response) => {
  console.log(response);
  const binance = response[0];
  const ftx = response[1];
  const coinbase = response[2];
  // Assign Values
  $("#binance-img").attr("src", binance.image);
  $("#binance-name").text(binance.name);
  $("#binance-score").text("Trust Score: " + binance.trust_score);
  $("#ftx-img").attr("src", ftx.image);
  $("#ftx-name").text(ftx.name);
  $("#ftx-score").text("Trust Score: " + ftx.trust_score);
  $("#coinbase-img").attr("src", coinbase.image);
  $("#coinbase-name").text(coinbase.name);
  $("#coinbase-score").text("Trust Score: " + coinbase.trust_score);
});

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnimation = (dir1, dir2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
  });
};

const toogleNav = () => {
  menuBars.classList.toggle("change");
  // Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Slide in
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Slide Out
    navAnimation("in", "out");
  }
};

// Event Listeners

menuBars.addEventListener("click", toogleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toogleNav);
});
