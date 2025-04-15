let cookieAmount = document.querySelector(".cookies");
let cashAmount = document.querySelector(".cash");
let upgrades = document.querySelector(".upgrade");
let cookieCount = 0;
let cashCount = 0;
let shop = document.querySelector(".shop");
let closeButton = document.querySelector(".close-button");
let doubleCookies = false;
let doubleCookiesBought = false;
let fourCookies = false;
let fourCookiesBought = false;
let eightCookies = false;
let eightCookiesBought = false;
let twentyCookies = false;
let twentyCookiesBought = false;
let thousandCookies = false;
let thousandCookiesBought = false;
let twoTimesCash = false;
let purchaseError = document.querySelector(".purchase-error");
let alreadyOwn = document.querySelector(".already-own");
let bonus = document.querySelector(".bonus");
let currentCashAmount = document.querySelector(".cash-amount");

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
    if(!twoTimesCash){
        cashCount = cashCount + cookieCount;
        cashAmount.innerHTML = cashCount;
        cookieCount = 0;
        cookieAmount.innerHTML = cookieCount;
    } 
    else{
        cashCount = cashCount + cookieCount * 2;
        cashAmount.innerHTML = cashCount;
        cookieCount = 0;
        cookieAmount.innerHTML = cookieCount;
    }
}

function doubleCookiesPurchase(){
    if(cashCount >= 50 && !doubleCookies && !fourCookies && !eightCookies && !twentyCookies && !thousandCookies){
        doubleCookies = true;
        doubleCookiesBought = true
        cashCount = cashCount - 50;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "2x cookies";
        purchaseError.style.display = "none";
    }
    else if(doubleCookies || doubleCookiesBought){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
    }
}

function quadCookiesPurchase(){
    if(cashCount >= 100 && !fourCookies && doubleCookies){
        fourCookies = true;
        doubleCookies = false;
        fourCookiesBought = true;
        cashCount = cashCount - 100;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "4x cookies";
        purchaseError.style.display = "none";
    }
    else if (fourCookies || fourCookiesBought){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
    }
}

function eightCookiesPurchase(){
    if(cashCount >= 500 && !eightCookies && fourCookies){
        eightCookies = true;
        fourCookies = false;
        eightCookiesBought = true;
        cashCount = cashCount - 500;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "8x cookies"
        purchaseError.style.display = "none";
    }
    else if(eightCookies || eightCookiesBought){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
    }
}

function twentyCookiesPurchase(){
    if(cashCount >= 1000 && !twentyCookies && eightCookies){
        twentyCookies = true;
        eightCookies = false;
        twentyCookiesBought = true;
        cashCount = cashCount - 1000;
        cashAmount.innerHTML = cashCount;
        upgrades.innerHTML = "20x cookies"
        purchaseError.style.display = "none";
    }
    else if (twentyCookies || twentyCookiesBought){
        alreadyOwn.style.display ="block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
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
    else if(thousandCookies || thousandCookiesBought){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
    }
}

function twoTimes(){
    if(cashCount >= 5000 && !twoTimesCash){
        twoTimesCash = true;
        bonus.innerHTML = "2x Cash";
        cashCount = cashCount - 5000;
        cashAmount.innerHTML = cashCount;
        purchaseError.style.display = "none";
    }
    else if(twoTimesCash){
        alreadyOwn.style.display = "block";
    }
    else{
        purchaseError.style.display = "block";
        currentCashAmount.innerHTML = cashCount;
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