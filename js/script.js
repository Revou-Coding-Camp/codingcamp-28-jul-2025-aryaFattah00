// Menunggu seluruh dokumen dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan event listener pada form dengan id "Message-Us" saat disubmit
  document.getElementById("Message-Us").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form melakukan submit default (reload halaman)

    // Mengambil nilai dari input form dan menghapus spasi di awal/akhir
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const nomor = document.getElementById("nomor").value.trim();

    // Validasi: Pastikan semua kolom terisi
    if (!nama || !email || !tanggal || !nomor) {
      alert("Semua kolom harus diisi.");
      return;
    }

    // Validasi: Pastikan format email benar
    if (!validateEmail(email)) {
      alert("Format email tidak valid.");
      return;
    }

    // Validasi: Pastikan nomor hanya berisi angka
    if (!/^\d+$/.test(nomor)) {
      alert("Nomor hanya boleh angka.");
      return;
    }

    // Menyusun hasil inputan untuk ditampilkan pada textarea/output
    const hasil = `Nama: ${nama}\nEmail: ${email}\nTanggal Lahir: ${tanggal}\nNomor: ${nomor}`;
    document.getElementById("pesananOutput").value = hasil;

    // Mengganti teks pada elemen dengan id "namaUser" menjadi nama yang diinputkan
    document.getElementById("namaUser").textContent = nama;
  });

  // Fungsi untuk validasi format email menggunakan regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});