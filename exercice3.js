function exercice3 (){
    var i;
    var chaine="Bonjour Chedya"
    chaine= document.getElementById('chaine').value;
console.log(chaine);

var query = window.location.search
console.log(query);
for (let i = 0; i < chaine.length; i++) {
    if (chaine!="") {
        ID= chaine[i];
         chaine = query.split(".");
      
    }
}
document.getElementById('chaine').value="";
}