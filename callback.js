// BİR OKULDA ÖĞRENCİ KAYIT İŞLEMLERİ YAPILMAKTADIR. YAPILACAK İŞLEM BASAMAKLARI 
// AŞAĞIDAKİ SIRADA GERÇEKLEŞTİRİLECEKTİR. 
//     1.YENİ KAYIT EKRANININ AÇILMASI
//     2.KİMLİK BİLGİLERİNİN GİRİLMESİ
//     3.BİLGİLER KAYDEDİLMESİ 
//     4.KAYIT İŞLEMİNİN TAMAMLANMASI 

kayıtEkranı(bilgilerGirildi);

console.log('Yeni Kayıt Ekranı Açılıyor. Lütfen Bekleyiniz.');

function kayıtEkranı(bilgilerGirildi){
    setTimeout(() => {
        console.log('Yeni Kayıt Ekranı Açıldı.');
        bilgilerGirildi(sistemeKaydedildi);
    }, 3500);
}

function bilgilerGirildi(sistemeKaydedildi) {
    setTimeout(() => {
        console.log('Kimlik Bilgileri Girildi');
        sistemeKaydedildi(kayıtTamamlandı)
    }, 2000);
}

function sistemeKaydedildi(kayıtTamamlandı) {
    setTimeout(() => {
        console.log('Bilgiler Kaydediliyor Lütfen Bekleyin...');
        kayıtTamamlandı()
    }, 1000);
}

function kayıtTamamlandı(){
    setTimeout(() => {
        console.log('Kayıt İşlemi Başarı İle Tamamlandı.');        
    }, 500);
}