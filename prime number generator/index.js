// var n=window.prompt("enter n");
var nprime=function(n) {
    var lim=100;
    var SOE=[];
    
SOE.fill(true,0,1000);
SOE[0]= false;
SOE[1]= false;
    for(var i=2;i*i<1000;i++){
        if(SOE[i]==true){
            for(var j=i;j<1000;j=j+i){
                SOE[j]=false;
            }
        }
    }
var count=0;
var idx=0;
    while (count<n&&idx<100) {
        if(SOE[idx]){
            console.log(idx)
        }
        idx++;
        count++;
    }
})
prime(5);