"use strict";

fetch('/JSON/Question.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.Question_One);
    console.log(data.Question_Two);

    let Question_Number = [];
    var Qtn_title="";
    const urlvalue = new URLSearchParams(window.location.search);

    if (urlvalue.get('Qtn') == '1') {
      Question_Number = data.Question_One;
      Qtn_title = "မေးခွန်းလွှာ ၁";
    }
    else if (urlvalue.get('Qtn') == '2') {
      Question_Number = data.Question_Two;
      Qtn_title="မေးခွန်းလွှာ ၂";
    }
    else if (urlvalue.get('Qtn') == '3') {
      Question_Number = data.Question_Third;
      Qtn_title="မေးခွန်းလွှာ ၃";
    }
    else if (urlvalue.get('Qtn') == '4') {
      Question_Number = data.Question_Four;
      Qtn_title="မေးခွန်းလွှာ ၄";
    }
    else if (urlvalue.get('Qtn') == '5') {
      Question_Number = data.Question_Five;
      Qtn_title="မေးခွန်းလွှာ ၅";
    }



    let output = "";
    let first_Ans = "";
    let sec_Ans = "";
    let third_Ans = "";

    for (let i = 0; i < Question_Number.length; i++) {

      if (Question_Number[i].Ans == 1) {
        first_Ans = "true";
        sec_Ans="false";
        third_Ans="false";
      }
      else if (Question_Number[i].Ans == 2) {
        sec_Ans = "true";
        first_Ans="false";
        third_Ans="false";
      }
      else if (Question_Number[i].Ans == 3) {
        third_Ans = "true";
        first_Ans="false";
        sec_Ans="false";
      }
      output += `
        <div class="card">
        <div class="card-body">
          <p class="card-text" id="first">${Question_Number[i].Qtn}</p>
          <div class="form-check">
            <input class="form-check-input checkbox" autocomplete="off" type="checkbox" value="${first_Ans}" >
            <label id="Ans_one" class="form-check-label" for="flexCheckDefault">
                ${Question_Number[i].Ans_one}
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checkbox" autocomplete="off" type="checkbox" value="${sec_Ans}" >
            <label id="Ans_two" class="form-check-label" for="flexCheckDefault">
               ${data.Question_One[i].Ans_two}
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checkbox" autocomplete="off" type="checkbox" value="${third_Ans}" >
            <label id="Ans_three" class="form-check-label" for="flexCheckDefault">
                ${Question_Number[i].Ans_three}
            </label>
          </div>
        </div>
      </div>
        `;
      // document.getElementById('first').innerHTML = data[i].Qtn;
      // document.getElementById('Ans_one').innerHTML= data[i].Ans_one;
      // document.getElementById('Ans_two').innerHTML= data[i].Ans_two;
      // document.getElementById('Ans_three').innerHTML= data[i].Ans_three;

    }
    document.getElementById('Qtn_title').innerHTML=Qtn_title;
    document.getElementById('ctn').innerHTML += output;
    window.onloadeddata = page_count();

  })
function page_count() {
  const items = document.querySelector(".container").children;
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const page = document.querySelector(".page-num");
  const result_btn = document.querySelector(".result");

  const maxitem = 5;
  let index = 1;

  const pagination = Math.ceil(items.length / maxitem);


  prev.addEventListener("click", function () {
    index--;
    check();
    showitem();
  })
  next.addEventListener("click", function () {
    index++;
    check()
    showitem();
  })


  function check() {
    if (index == pagination) {
      next.classList.add("disabled");
      result_btn.classList.remove("disabled");
    }
    else {
      next.classList.remove("disabled");
    }
    if (index == 1) {
      prev.classList.add("disabled");
    }
    else {
      prev.classList.remove("disabled");
    }
  }
  function showitem() {
    for (let i = 0; i < items.length; i++) {


      if (i >= (index * maxitem) - maxitem && i < index * maxitem) {
        items[i].classList.remove("hide");
        items[i].classList.add("show");
      }
      else {
        items[i].classList.remove("show");
        items[i].classList.add("hide");
      }
      page.innerHTML = index;

    }
  }
  check();
  showitem();
}






