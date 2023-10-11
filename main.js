import './style.css'
import { NightVision } from "night-vision";
import data from "./data.json";

document.querySelector("#app").innerHTML = `
<div>
<h1 class="text-5xl text-[#ba0179] pb-16 font-semibold text-center">Cylex's Night Vision Chart</h1>
</div>
<!-- CHART -->
<div id="chart"></div>
<!-- CHART -->
`

let chart = new NightVision("chart", {
  data,
  autoResize: true,
  colors: { back: "#111113", grid: "#2e2f3055" }
});

// Refernce for experiments
window.chart = chart;
