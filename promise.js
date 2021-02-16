//en üst satırdaki durum true ve false sadece doğru yada yanlışı görmek için yazıldı.
var durum = true;
var user = {id:1, adi:"Murat"};
var ilanlar = {id: 1, uid:1, ilan:"Araba"};

function login (){
    return new Promise (function (resolve, reject)){
        if (durum == true){
            resolve(user);
        } else {
            reject("kullanıcı bilgileri bulunamadı");
        }
    };
}

function listele(kullanıcı){
    setTimeout(() => {
        console.log("Kullanıcı Adı:" + user.adi)
        console.log (ilanlar);
    }, 2000);
}


login()
    .then((kullanıcı_bilgileri)) =>{
        console.log(kullanıcı_bilgileri);
        listele ()
    })
    .catch ((hata)) => {
        console.log(hata);
    });