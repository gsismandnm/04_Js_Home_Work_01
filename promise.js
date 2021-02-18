// BİR OKULDA ÖĞRENCİ KAYIT İŞLEMLERİ YAPILMAKTADIR. YAPILACAK İŞLEM BASAMAKLARI 
// AŞAĞIDAKİ SIRADA GERÇEKLEŞTİRİLECEKTİR. 
//     1.YENİ KAYIT EKRANININ AÇILMASI
//     2.KİMLİK BİLGİLERİNİN GİRİLMESİ
//     3.BİLGİLER KAYDEDİLMESİ 
//     4.KAYIT İŞLEMİNİN TAMAMLANMASI 


let islemTamam = true;
function kayıtEkranı() {
    console.log('Yeni Kayıt Ekranı Açılıyor. Lütfen Bekleyiniz.');
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Yeni Kayıt Ekranı Açıldı');
            //islemTamam =false;
        } else {
            reject('Teknik Bir Arıza Nedeniyle Kayıt Ekranı Açılamadı');
        }
    });
}
function bilgilerGirildi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Kimlik Bilgileri Giriliyor');
            //islemTamam =false;
        } else {
            reject('Kimlik Bilgilerin Girilmesi Esnasında Teknik Bir Arıza Yaşandı');
        }
    });
}
function sistemeKaydedildi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Bilgiler Kaydediliyor Lütfen Bekleyiniz');     
            //islemTamam =false;       
        } else {
            reject('Kayıt Sırasında Teknik Bir Arıza Meydana Geldi');
        }
    });
}
function kayıtTamamlandı(){     
    console.log('Kayıt Başarı İle Tamamlandı');     
}

kayıtEkranı()
    .then((data) => {
        //setTimeout(() => { resolve(console.log(data)); }, 2000);
        console.log(data);
        bilgilerGirildi()  
        .then((data) => {
            //setTimeout(() => { resolve(console.log(data)); }, 2000);
            console.log(data)
            sistemeKaydedildi()
            .then((data) => {
                //setTimeout(() => { resolve(console.log(data)); }, 2000);
                console.log(data);
                kayıtTamamlandı();        
            })
            .catch((hata) => {
                console.log(hata);
            });    
        })
        .catch((hata) => {
            console.log(hata);
        });
    })
    .catch((hata) => {
        console.log(hata);
    });