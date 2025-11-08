// Ambil elemen HTML yang dibutuhkan
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const generateButton = document.getElementById('generateButton');
const resultNumber = document.getElementById('resultNumber');

// Fungsi untuk menghasilkan angka acak
function generateRandomNumber() {
    // Ambil nilai dari input dan konversi ke integer
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    // Validasi input
    if (isNaN(min) || isNaN(max)) {
        resultNumber.textContent = "Input harus berupa angka!";
        return;
    }

    if (min >= max) {
        resultNumber.textContent = "Min harus lebih kecil dari Max!";
        return;
    }
    
    // Pastikan angka minimum tidak negatif (sesuai atribut min="0" di HTML)
    if (min < 0) {
        min = 0;
        minInput.value = 0; // Perbarui tampilan input jika perlu
    }

    // Rumus untuk menghasilkan bilangan bulat acak antara min (inklusif) dan max (inklusif)
    // Math.random() menghasilkan angka float antara 0 (inklusif) dan 1 (eksklusif)
    // Math.floor() membulatkan ke bawah
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Tampilkan hasil di elemen resultNumber
    resultNumber.textContent = randomNumber;
}

// Tambahkan event listener ke tombol
generateButton.addEventListener('click', generateRandomNumber);

// Panggil fungsi sekali saat halaman dimuat untuk menampilkan angka acak awal
generateRandomNumber();
