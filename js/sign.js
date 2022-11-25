window.onload=function(){
  showsign();
  Sign_pagination(); 
};

function Sign_pagination(){
  const items=document.querySelector(".gallery").children;
  const prev=document.querySelector(".prev");
  const next=document.querySelector(".next");
  const page=document.querySelector(".page-num");
  const maxitem=20;
  
  let index = 1;
  
  const pagination=Math.ceil(items.length/maxitem);
  page.innerHTML=index;
  
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
      for (let i = 0; i < items.length; i++) {          
          
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
  
}

function showsign(){
  let output="";
  for(let i=1; i<=30;i++)
  {  
       
    output+=`        
        <a href="/images/sign/sign_${i}.jpg" data-lightbox="models" data-title="">
          <img src="/images/sign/sign_${i}.jpg" alt="">
        </a>
        `
        
  }
  document.getElementById("img_gallery").innerHTML = output;

}