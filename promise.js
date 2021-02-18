// BİR OKULDA ÖĞRENCİ KAYIT İŞLEMLERİ YAPILMAKTADIR. YAPILACAK İŞLEM BASAMAKLARI 
// AŞAĞIDAKİ SIRADA GERÇEKLEŞTİRİLECEKTİR. 
//     1.YENİ KAYIT EKRANININ AÇILMASI
//     2.KİMLİK BİLGİLERİNİN GİRİLMESİ
//     3.BİLGİLER KAYDEDİLMESİ 
//     4.KAYIT İŞLEMİNİN TAMAMLANMASI 




let islemTamam = true;
function suKaynadi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Su Kaynadı...');
            //islemTamam =false;
        } else {
            reject('Su KaynaMAdı...');
        }
    });
}
function demAtildi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Kaynayan suya çay atıldı...');
            //islemTamam =false;
        } else {
            reject('Kaynayan suya çay atılMAdı...');
        }
    });
}
function demlemeSuresiDoldu() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Çayın demlenme süresi tamamlandı...');     
            //islemTamam =false;       
        } else {
            reject('Çayın demlenme süresi tamamlanMAdı...');
        }
    });
}
function cayDemlendi(){    
    console.log('Çay demlendi.');     
}

suKaynadi()
    .then((data) => {
        //setTimeout(() => { resolve(console.log(data)); }, 2000);
        console.log(data);
        demAtildi()  
        .then((data) => {
            //setTimeout(() => { resolve(console.log(data)); }, 2000);
            console.log(data)
            demlemeSuresiDoldu()
            .then((data) => {
                //setTimeout(() => { resolve(console.log(data)); }, 2000);
                console.log(data);
                cayDemlendi();        
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