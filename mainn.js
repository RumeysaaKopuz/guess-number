function toplama() {
    var a = parseInt(document.getElementById("input-a").value); // input-a id'li input'tan a değerini al
    var b = parseInt(document.getElementById("input-b").value); // input-b id'li input'tan b değerini al
    var sonuc = a + b; // a ve b'yi topla
    alert("Toplam: " + sonuc); // alert kutusunda sonucu göster
  }