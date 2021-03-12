button=document.querySelector("#button-send-link");
input=document.querySelector("#input-send-link");
incorrect=document.querySelector("#incorrect")
snapDownload=document.querySelector("#snap-download")
loading=document.querySelector("#loading")
success=document.querySelector("#success")


button.addEventListener("click",function(e){

let str=parseInt(input.value);
if(isNaN(str)){
    snapDownload.style.height="600px";
    success.style.display="none";
    incorrect.style.display="block";
}else if(input.value.length<11|| input.value.length>=12){
    snapDownload.style.height="600px";
    success.style.display="none";
    incorrect.style.display="block";
}
else{
    incorrect.style.display="none";
    snapDownload.style.height="600px";
    loading.style.display="block";
    setTimeout(function(){
          loading.style.display="none";
          success.textContent=`لینک های دانلود با موفقیت به شماره ${input.value} ارسال شد`
          success.style.display="block";
          setTimeout(function(){ 
              success.style.display="none"; 
         },2000)
    },500)

}
}) 