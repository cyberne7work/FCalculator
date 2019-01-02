
function getvalue(){
var firstInput=(document.getElementById("first").value).toLowerCase();
var secondInput=(document.getElementById("second").value).toLowerCase();
var newArrayFirst=firstInput.split("");
var newArraySecond=secondInput.split("");
var totalLength=firstInput.length+secondInput.length;
var countValue=getresult(newArrayFirst,newArraySecond);
var total=Math.floor(((countValue*2)/totalLength)*100);
console.log(total);
document.getElementById("result").innerHTML=total+"%";

}
function reset(){
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("result").innerHTML="";
}
function getresult(first,second){
    let count=0;
    for (let i = 0; i < first.length; i++) {
        for (let k = 0; k < second.length; k++) {
            if(first[i]===second[k]){
                count++;
            }    
        }
    }
    return count;
}


document.getElementById("button").addEventListener("click",getvalue);
document.getElementById("reset").addEventListener("click",reset);