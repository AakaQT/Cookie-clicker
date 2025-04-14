let cookieAmount = document.querySelector(".cookies");
let cashAmount = document.querySelector(".cash");
let upgrades = document.querySelector(".upgrade");
let cookieCount = 0;
let cashCount = 0;
let shop = document.querySelector(".shop")
let closeButton = document.querySelector(".close-button");
let doubleCookies = false;
let fourCookies = false;
let eightCookies = false;
let twentyCookies = false;
let thousandCookies = false;
let purchaseError = document.querySelector(".purchase-error");
let alreadyOwn = document.querySelector(".already-own");

function cookieClick(){
    if(!doubleCookies && !fourCookies && !eightCookies && !twentyCookies && !thousandCookies){
        cookieCount++;
        cookieAmount.innerHTML = cookieCount;
    }
    else if (doubleCookies && !fourCookies){
        cookieCount += 2;
        cookieAmount.innerHTML = cookieCount;
    }
    else if (!doubleCookies && fourCookies){
        cookieCount += 4;
        cookieAmount.innerHTML = cookieCount;
    }
    else if (!fourCookies && eightCookies){
        cookieCount += 8;
        cookieAmount.innerHTML = cookieCount;
    }
    else if (!eightCookies && twentyCookies){
        cookieCount += 20;
        cookieAmount.innerHTML = cookieCount;
    }
    else if(!twentyCookies && thousandCookies){
        cookieCount += 1000;
        cookieAmount.innerHTML = cookieCount;
    }
}

function sellCookies(){
    cashCount = cashCount + cookieCount;
    cashAmount.innerHTML = cashCount;
    cookieCount = 0;
    cookieAmount.innerHTML = cookieCount;
}

function doubleCookiesPurchase(){
    if(cashCount >= 50 && !doubleCookies && !fourCookies && !eightCookies && !twentyCookies && !thousandCookies){
        doubleCookies = true;
        cashCount = cashCount - 50;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "2x cookies";
        purchaseError.style.display = "none";
    }
    else if(doubleCookies){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
    }
}

function quadCookiesPurchase(){
    if(cashCount >= 100 && !fourCookies && doubleCookies){
        fourCookies = true;
        doubleCookies = false;
        cashCount = cashCount - 100;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "4x cookies";
        purchaseError.style.display = "none";
    }
    else if (fourCookies){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
    }
}

function eightCookiesPurchase(){
    if(cashCount >= 500 && !eightCookies && fourCookies){
        eightCookies = true;
        fourCookies = false;
        cashCount = cashCount - 500;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "8x cookies"
        purchaseError.style.display = "none";
    }
    else if(eightCookies){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
    }
}

function twentyCookiesPurchase(){
    if(cashCount >= 1000 && !twentyCookies && eightCookies){
        twentyCookies = true;
        eightCookies = false;
        cashCount = cashCount - 1000;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "20x cookies"
        purchaseError.style.display = "none";
    }
    else if (twentyCookies){
        alreadyOwn.style.display ="block";
    }
    else{
        purchaseError.style.display = "block";
    }
}

function thousandCookiesPurchase(){
    if(cashCount >= 10000 && !thousandCookies && twentyCookies){
        thousandCookies = true;
        twentyCookies = false;
        cashCount = cashCount - 10000;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "1000x cookies";
        purchaseError.style.display = "none";
    }
    else if(thousandCookies){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
    }
}

function shopButtonOpen(){
    shop.style.display = "block";
}

function shopButtonClose(){
    shop.style.display = "none";
    purchaseError.style.display = "none";
    alreadyOwn.style.display = "none";
}