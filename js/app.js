<script>
function closeAd() {
  document.getElementById("adBox").style.display = "none";
}
</script>
<script>
const adBox = document.getElementById("adBox");

if (localStorage.getItem("adClosed")) {
  adBox.style.display = "none";
}

function closeAd() {
  adBox.style.display = "none";
  localStorage.setItem("adClosed", "true");
}
</script>
