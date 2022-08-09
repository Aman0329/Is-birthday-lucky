var dobs=document.querySelector('#dob');
var nums=document.querySelector('#num');
var button=document.querySelector('#btn');
var outputs=document.querySelector('.output');
function sum(input){
    var inputss=input.replaceAll("-","");
    var sums=0;
    for(var i=0;i<=inputss.length;i++){
        sums=sums+Number(inputss.charAt(i));
        
    }
    return sums;
}
btn.addEventListener("click",()=>{
    var sumn=sum(dobs.value);
    if(sumn%nums.value==0){
outputs.innerText="your birthday is lucky";
    }
    else{
        outputs.innerText="your birthday is not lucky";
    }
})
