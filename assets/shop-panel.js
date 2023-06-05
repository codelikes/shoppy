document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('open-sidebar').addEventListener('click', function () {
    // add class active on #sidebar
    document.getElementById('sidebar').classList.add('active');

    // show sidebar overlay
    document.getElementById('sidebar-overlay').classList.remove('d-none');
  });

  document.getElementById('sidebar-overlay').addEventListener('click', function () {
    // remove class active from #sidebar
    document.getElementById('sidebar').classList.remove('active');

    // hide sidebar overlay
    this.classList.add('d-none');
  });
});
