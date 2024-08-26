function ubahTeks() {
    var inputTeks = document.querySelector('.inputteks input');
    var teksParagraf = document.querySelector('.teks p');
    
    if (inputTeks.value.trim() !== "") {
        teksParagraf.textContent = inputTeks.value;
    } else {
        teksParagraf.textContent = "Silakan masukkan teks di kotak input";
    }
    
    inputTeks.value = "";
}