const Est_un_palindrome=(mot)=>{
    let debut=0;
    let fin=mot.length-1;
     if(mot.length==1 || mot.length==0){
        return true;
     }
     else {
        if(mot[debut]===mot[fin]){
            debut=debut+1;
            fin=fin-1;
            return Est_un_palindrome(mot.slice(1,-1));
              
       }else{
        return false;
       }
     }
}
let resultat=Est_un_palindrome("PHP");
console.log(resultat)
