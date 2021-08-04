const input = document.getElementById('myInput');
const div = document.querySelector('.tags'); // spanları barındıran div
let listArr = []; // span'ların text'lerini array olarak tutacak.

input.addEventListener('keyup', function(e){

    if(e.keyCode === 13){ // enter tuşu keyup olursa
        let inValue = input.value;
        listArr.push(inValue.trim().replace(/\s/g,'')); // input value'sunu trim et ve aradaki boşlukları al ve listArr'de tut.
        let spanList = ""; // 

        listArr.forEach(function(element,index){ // listArr'nin herbir elemanı ve bu herbir elemanının index'i için
            spanList += '<span value=' + index + '>#' + element + '<i class="fas fa-times"></i></span>'; // herbir enter'da spanlist'i oluşturmaya devam et.
        });

        document.querySelector('.tags').innerHTML  = spanList; // kaç defa enter yapıldıysa o kadar oluşan spanları div'in içine html olarak gönder
        input.value = ""; // herbir enter'da input'u temizle
    }
})

div.addEventListener('click', (e)=>{ // div ve bunun childlarına her tıklandığında click event'i parametre olarak gönderiyorum

    if(e.target.className === 'fas fa-times'){ // css class ismine göre event'i alan elementi hedefliyorum. bubbling.
        e.target.parentElement.remove();  // bu event'i alan elemanın parent'ını kaldır. Bu durumda tıklanan ikon'un parent'ı olan ilgili span oluyor.
        let elemntValue = e.target.parentElement.getAttribute('value'); // tıklanan span'ın value değeri. Bunu listArr'yi yeniden düzenlemede kullanacağım.
        listArr.splice(elemntValue, 1) // ilgili value değerine sahip olan span'ın, text'tine denk gelen elemanı, tüm elemanları tutan listArr arrayinden kaldırdım.
        let spanList = ""; // spanları yeniden oluşturuyorum
       
        listArr.forEach(function(element,index){
            spanList += '<span value=' + index + '>#' + element + '<i class="fas fa-times"></i></span>'; //spanları oluşturmaya devam et.
        });

        document.querySelector('.tags').innerHTML  = spanList; // bir tag'i kaldırdığımda tüm spanları yeniden div'in içinde oluştur..
    }
})



