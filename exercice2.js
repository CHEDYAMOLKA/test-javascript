function somme2(){
    tab=[];
    nbr1:document.getElementById('nbr1').value;
    nbr2:document.getElementById('nbr2').value;
    var table = tab.find((Element => Element.nbr2 === nbr2 && Element.nbr2 === nbr2));
 var sum =nbr1+nbr2;
    if(sum>0){
         return table;
    }else{
        return ("nbr negatif");
    }
}