function Sh_Result() {
    let checkboxes=document.getElementsByClassName('checkbox');
    var Ans_count=0;
    let index="";
    
    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked && checkboxes[i].value=="true") {
            Ans_count+=1;            
        }
        else if(checkboxes[i].checked && checkboxes[i].value=="false")
        {
            index+=i;
        }
        
    }     
      
    if(Ans_count<= 40){       
        document.getElementById('modal_id').innerHTML=Ans_count + " မှတ် ရရှိပါသည်။";
    }
    document.getElementById('btn-modal').onclick=function(){
        document.location.reload();
        Ans_count=0;
    }
    // alert("Your score is " + Ans_count);
    
    
}
