const items=document.querySelector(".container").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");

const maxitem=5;
let index=1;

const pagination=Math.ceil(items.length/maxitem);


prev.addEventListener("click",function () {
    index--;
    check();
    showitem();
})
next.addEventListener("click",function(){
    index++;
    check()
    showitem();
})

function check(){
  if(index==pagination){
    next.classList.add("disabled");
  }
  else{
    next.classList.remove("disabled");
  }
  if(index==1){
    prev.classList.add("disabled");
  }
  else{
    prev.classList.remove("disabled");
  }
}
function showitem()
{
    for (let i = 0; i <= items.length; i++) {
        
        
        if(i>=(index*maxitem)-maxitem && i<index*maxitem){
            items[i].classList.remove("hide");
            items[i].classList.add("show");
        }
        else{
          items[i].classList.remove("show");
          items[i].classList.add("hide");
        }
        page.innerHTML=index;
        
    }
}

window.onload=function(){
  showitem();
  check();
};