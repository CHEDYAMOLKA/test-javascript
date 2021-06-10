function somme(){
    var nbr1, nbr2, sum;
   
    //console.log(table)
    nbr1:document.getElementById('nbr1').value;
    nbr2:document.getElementById('nbr2').value;

   sum = nbr1 + nbr2
    document.getElementById("sum").value = sum;
    document.getElementById('nbr1').value="";
   document.getElementById('nbr2').value="";
   document.getElementById("sum").value = "";
}

