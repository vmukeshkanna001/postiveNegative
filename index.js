function fun1(){
    var x=Number(document.getElementById("input").value);
    var y=document.getElementById("output");

    if(isNaN(x)){
        y.innerHTML="Enter valid value";

    }
    else if(x==0){
        y.innerHTML="is zero";


    }

    else if(x>0){
        y.innerHTML="is postive";

    }

    else{
        y.innerHTML="is negative";

    }

}