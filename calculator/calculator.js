let input=document.querySelector("input")
let appenddata=(data)=>{
    // console.log("hi");
let input=document.querySelector("input")

     
    input.value+=data
// console.log(box);

}
let cleardisplay=()=>{
    input.value="";
}

let calculate=()=>{
    let input=document.querySelector("input")
    let data=input.value
    input.value=eval(data)
}
let operator=()=>{
    input.value=input.value.slice(0,-1)
} 