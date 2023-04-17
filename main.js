const input = document.getElementById("inpt")
const btn = document.getElementById("btn")
const demo = document.getElementById("demo")



function myfunction(val){
    
    let lgth = val.length
    if(lgth>4 || lgth<4 || val<0 || val == 000){
        demo.innerHTML = "Write a 4 digit positive number"
    }
    else{
        demo.innerHTML = Math.round(val/4)
    }
}
btn.addEventListener("click",()=>{
    myfunction(input.value);
    })
