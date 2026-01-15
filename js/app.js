<script>
// Mostrar modal al cargar (con delay)
window.onload = function () {
  setTimeout(() => {
    document.getElementById("adModal").style.display = "flex";
  }, 2000); // 2 segundos
};

function closeAdModal() {
  document.getElementById("adModal").style.display = "none";
}
</script>
