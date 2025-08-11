const dropDownSelects = document.querySelectorAll("select");
const btn = document.querySelector(".submit-btn");
submitResults(btn);

for(let selectOptions of dropDownSelects){
    for(let currencyKey in countryList){
        let newOptions = document.createElement("option");
        newOptions.innerText = currencyKey;
        newOptions.value = currencyKey;
        if(selectOptions.name==="from" && currencyKey==="EUR"){
            newOptions.selected = true;
        }
        if(selectOptions.name==="to" && currencyKey==="INR"){
            newOptions.selected=true;
        }
        selectOptions.append(newOptions);
    }
    selectOptions.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


function submitResults(btn){
    btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let msg = document.querySelector(".input-error-msg");
    let input = document.querySelector("input");
    let amount = input.value.trim();

    if(amount === "" || parseFloat(amount) < 1){
        if (amount === "") {
            msg.innerText = "Input cannot be empty.";
          } else if (parseFloat(amount) < 1) {
            msg.innerText = "Value must be greater than 1.";
          }
          input.value= 1;
    }else{
        msg.innerText = "";
    }
    if(amount!=="" && amount >0){
        getData(amount,msg);
        }

    });
}



async function getData(amount){
    const fromCountry = document.querySelector(".from-select").value.toLowerCase().trim();
    const convertToCountry = document.querySelector(".to-select").value.toLowerCase().trim();
    const convertedCurrencyMsg = document.querySelector(".msg");

    const URL = `https://latest.currency-api.pages.dev/v1/currencies/${fromCountry}.json`
    const test = await fetch(URL);
    const data = await test.json();


    for(let country in data){
        if(country ===fromCountry){
            for(let toCountry in data[country]){
                if(toCountry===convertToCountry){
                    let returns = amount*data[country][toCountry];
                    convertedCurrencyMsg.innerText = `${amount} ${fromCountry.toUpperCase()} = ${returns.toFixed(2)} ${convertToCountry.toUpperCase()}`;
                }
            }
        }
    }
}

function swapCountry(){

    let temp = dropDownSelects[0].value;
    dropDownSelects[0].value = dropDownSelects[1].value;
    dropDownSelects[1].value = temp;

    updateFlag(dropDownSelects[0]);
    updateFlag(dropDownSelects[1]);

    submitResults(swapIcon);

}

let swapIcon = document.querySelector(".exchange-icon");
swapIcon.addEventListener("click",(evt)=>{
        swapCountry();
    });
