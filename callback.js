function plakaOku() {
setTimeout(function(gecisYapıldı) {
    console.log ('Plaka Okundu')
    gecisYapıldı();
    
}, 1000);    
}

function gecisYapıldı() {
    setTimeout(() => {
        console.log('Geciş Başarılı')
        
    }, 500);
    
}

/*function yeniGecis() {
    setTimeout(() => {
        console.log('Yeni Geçiş İçin Sistem Hazır')
    }, 250);    
}*/
plakaOku(gecisYapıldı ());

