alert("Selamat Datang di Bioskop Raka")

const nama = prompt("Masukkan Nama Anda")
const umur = parseInt(prompt("Masukkan Angka Umur Anda"))

if (umur > 13) {
  alert(`Selamat datang ${nama}! \nSilakan pesan tiket terlebih dahulu.`)
  const studio = prompt("Silakan pilih studio Anda (A, B, C).").toUpperCase()

  if (studio === "A") {
    alert(`Berikut tiket Anda \nPemesan: ${nama} \nStudio: ${studio} \nUmur: ${umur} tahun \nSelamat menonton film Anda!`)
  } else if (studio === "B") {
    alert(`Berikut tiket Anda \nPemesan: ${nama} \nStudio: ${studio} \nUmur: ${umur} tahun \nSelamat menonton film Anda!`)
  } else if (studio === "C") {
    alert(`Berikut tiket Anda \nPemesan: ${nama} \nStudio: ${studio} \nUmur: ${umur} tahun \nSelamat menonton film Anda!`)
  }
} else {
    alert(`Mohon maaf ${nama}, Anda tidak diizinkan untuk masuk studio
    \ndikarenakan belum cukup umur (min. 13 tahun).`)
}