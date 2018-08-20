var productApple = new Object();
var productApple = {};

productApple.price =  +prompt("Введите цену на яблоки(10 по умолчанию))", 10); //Ввод цены

productApple.profit = 25; //Процент наценки

var AppleWitchDiscount = productApple.price + (productApple.price / 100 * productApple.profit);

//Первый способ
console.log("Яблоки украинские. \n Цена: "  + AppleWitchDiscount.toFixed(2) + "грн"); 

//Второй способ
console.log(`Яблоки украинские. 
 Цена: ` + AppleWitchDiscount.toFixed(2) + `грн`); 

