function dis(val){
    document.getElementById("text").value+=val;
}
            
function solve(){
	var x = document.getElementById("text").value;
    var y = eval(x);
    document.getElementById("text").value = y;
}
            
function clr(){
	document.getElementById("text").value = "";
}