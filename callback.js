function loginol(ikinciislem){
    setTimeout(function() => {
        console.log('login başarılı');     
        ikinciislem();   
    }, 2000);
}

function listele(){
    setTimeout(() => {
    console.log('ilanlar listelendi');    
    }, 500);
}

loginol(listele);


//NOT JS'de önce kolay işlemler yapılır sonra diğeri olur. Yani asenkron çalışır. 
//Ancak Call back'te işlem sırasını belirliyorsun. 
//İstediğin senkron olmasını yani sırayla yapılamını sağlar. 
//Yukarıdaki örnekte şayet listele yazısı yani callback olmasaydı. 500 küçük olduğu için
//önce listele çalışır, sonra 2000 olduğu için loginol çalışır.
//Bir başka şeyde bu örnekte olduğu gibi şayet login başarılı ise listele çalışsın da denilebilir.