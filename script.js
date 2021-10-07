const termekek = [];
$(function(){
   
    beolvas("jsontermekek.json",termekek,megjelenit);
   
});
function beolvas(fajlnev,termekek){
    $.ajax(
        {url: "jsontermekek.json",
        success: function(result){
        console.log(result);
        fajlnev=result.termekek;
        console.log(termekek);
        megjelenit();

    }}
    );
}
function rendezes(){
    termekek.forEach(elem=>{
        const targy = {};
        targy.nev=elem;
        osszerendez.push(targy);
    });
    megjelenit(osszerendez);
}

function megjelenit(){
    $("article #tablazat").append("<table>");
    var txt ="<tr><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th></tr>";
    termekek.forEach((value, index)=>{
        txt += "<tr id='" + index + "'>";
    
    for (var item in termekek[index]) {
        txt += "<td>" + termekek[index][item] + "</td>";
        
    }
    
    txt += "</tr>";
    $("article #tablazat").append(txt);
    
    $("article #tablazat").text(txt);
});
}
