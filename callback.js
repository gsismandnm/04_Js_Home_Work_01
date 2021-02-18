// BİR OKULDA ÖĞRENCİ KAYIT İŞLEMLERİ YAPILMAKTADIR. YAPILACAK İŞLEM BASAMAKLARI 
// AŞAĞIDAKİ SIRADA GERÇEKLEŞTİRİLECEKTİR. 
//     1.YENİ KAYIT EKRANININ AÇILMASI
//     2.KİMLİK BİLGİLERİNİN GİRİLMESİ
//     3.BİLGİLER KAYDEDİLMESİ 
//     4.KAYIT İŞLEMİNİN TAMAMLANMASI 


//1. YENİ KAYIT EKRANININ AÇILMASI
kayıtEkranı(bilgilerGirildi);

function kayıtEkranı(bilgilerGirildi){
    console.log('Yeni Kayıt Ekranı Açılıyor. Lütfen Bekleyiniz.');
    setTimeout(() => {
        console.log('Yeni Kayıt Ekranı Açıldı.');
        bilgilerGirildi(sistemeKaydedildi);
    }, 3500);
}

//2.KİMLİK BİLGİLERİNİN GİRİLMESİ
function bilgilerGirildi(sistemeKaydedildi) {
    setTimeout(() => {
        console.log('Kimlik Bilgileri Giriliyor');
        sistemeKaydedildi(kayıtTamamlandı)
    }, 2000);
}

//3.BİLGİLERİN SİSTEME KAYDEDİLMESİ
function sistemeKaydedildi(kayıtTamamlandı) {
    setTimeout(() => {
        console.log('Bilgiler Kaydediliyor Lütfen Bekleyin...');
        kayıtTamamlandı()
    }, 1000);
}

//4.KAYIT İŞLEMİNİN TAMAMLANMASI
function kayıtTamamlandı(){
    setTimeout(() => {
        console.log('Kayıt İşlemi Başarı İle Tamamlandı.');        
    }, 500);
}