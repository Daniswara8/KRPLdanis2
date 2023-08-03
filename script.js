function showDaftar() {
    var div = document.getElementById("jadwal");
    div.style.display = "block";
  }

  function quitDaftar() {
    var div = document.getElementById("jadwal");
    div.style.display = "none";
  }

  // Fungsi untuk mengubah cellpadding tabel jika lebar layar <= 720px
  function ubahCellpadding() {
      var table = document.getElementById("tabel");
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth <= 720) {
      // Jika lebar layar <= 720px, ubah nilai cellpadding menjadi 10
      for (var i = 0; i < table.rows.length; i++) {
          for (var j = 0; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j].style.padding = "6px";
          }
      }
      } else {
      // Jika lebar layar > 720px, kembalikan nilai cellpadding menjadi 20
      for (var i = 0; i < table.rows.length; i++) {
          for (var j = 0; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j].style.padding = "20px";
          }
      }
      }
  }

  // Panggil fungsi saat halaman pertama kali dimuat dan saat ukuran layar berubah
  window.onload = ubahCellpadding;
  window.onresize = ubahCellpadding;