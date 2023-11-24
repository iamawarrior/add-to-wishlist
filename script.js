window.onload=function(){

    let num=0;
    // wishlist=0;
    document.querySelector(".addtobag").addEventListener("click",function(){
        num+=1;
        document.querySelector(".display").innerHTML=`Your bag has ${num} items`;
    
        });
    document.querySelector(".add").addEventListener("click",function(){
        num+=2;
        document.querySelector(".display").innerHTML=`Your bag has ${num} items`;
    
        });
        
    document.querySelector(".movetowishlist").addEventListener("click",function(){
                if(num>0){
                num-=1;
                document.querySelector(".display").innerHTML=`Your bag has ${num} items`;
            }
                
            });
    document.querySelector(".clear").addEventListener("click",function(){
                num=0;
                document.querySelector(".display").innerHTML=`Your bag has ${num} items`;

            });

}