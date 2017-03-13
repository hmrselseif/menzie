//Setup functie (runt een keer)
window.onload = function() {
    //Laat startschrem zien
    document.getElementById("start").style.display = 'block';
    document.getElementById("terugButton").style.display = 'none';
    document.getElementById('volgendevraagknop').style.display = 'none';

    niv = 1;    //niv 1:makkelijk niv 2:moeilijk
    geluid = true; //geluid aan/uit
    tutorial = true; //uitleg aan/uit
    autoVolgende = false; //automatische volgende vraag aan/uit




}


//Terugknop links boven
function terug() {
    document.getElementById("start").style.display = 'block';
    document.getElementById("terugButton").style.display = 'none';

    document.getElementById("instellingen").style.display = 'none';
    document.getElementById("vraag").style.display = 'none';
    document.getElementById("score").style.display = 'none';
    document.getElementById("feedback").style.display = 'none';
    for(i = 0; i < 11; i++){
        document.getElementById('vraag' + i).style.display = 'none';
    }

}

//scorescherm
function scoreBoord() {
    document.getElementById("score").style.display = 'block';
    document.getElementById("start").style.display = 'none';
    document.getElementById("terugButton").style.display = 'block';


}


//start knop
function starten() {
    for(i = 0; i < 12; i++){
        document.getElementById('vraag' + i).style.display = 'none';
    }

    if (tutorial) {
        //als uitleg is ingschakelt, ga naar vraag 0 (= uitleg)
        document.getElementById("vraag0").style.display = 'block';
        document.getElementById("vraag1").style.display = 'none';
        laatsteVraag = 0;
    } else {
        //als uitleg is uitgeschakelt, ga naar vraag 1
        document.getElementById("vraag1").style.display = 'block';
        document.getElementById("vraag2").style.display = 'none';
        document.getElementById("vraag0").style.display = 'none';
        laatsteVraag = 1;

    }
    document.getElementById("start").style.display = 'none';
    document.getElementById("vraag").style.display = 'block';
    document.getElementById("terugButton").style.display = 'block';
    document.getElementById('progressBar').style.width ='0px';
    score = 0;

}


//Instellingen
function instellingen() {
    document.getElementById("start").style.display = 'none';
    document.getElementById("instellingen").style.display = 'block';
    document.getElementById("terugButton").style.display = 'block';
}

//zet geluid aan/uit
function setgeluid(x) {
    if (x === 'aan') {
        geluid = true;
        document.getElementById('instGldAan').className = "instelButton geluidButton gekozen";
        document.getElementById('instGldUit').className = "instelButton geluidButton";
        console.log('geluid = aan')
    } else {
        console.log("geluid is uit")
        geluid = false;
        document.getElementById('instGldUit').className = "instelButton geluidButton gekozen";
        document.getElementById('instGldAan').className = "instelButton geluidButton";
    }
}
//zet niv op mak(kkelijk) of moe(ilijk)
function setNiv(x) {
    if (x === 'moe') {
        niv = 2;
        document.getElementById('nivMoe').className = "instelButton geluidButton gekozen";
        document.getElementById('nivMak').className = "instelButton geluidButton";
    } else {
        niv = 1;
        document.getElementById('nivMak').className = "instelButton geluidButton gekozen";
        document.getElementById('nivMoe').className = "instelButton geluidButton";
    }
}

//zet uitleg aan/uit
function setUitleg(x) {
    if (x) {
        tutorial = true;
        document.getElementById('uitlegAan').className = "instelButton geluidButton gekozen";
        document.getElementById('uitlegUit').className = "instelButton geluidButton";
    } else {
        tutorial = false;
        document.getElementById('uitlegUit').className = "instelButton geluidButton gekozen";
        document.getElementById('uitlegAan').className = "instelButton geluidButton";
    }
}
//zet automatisch naar volgende aan/uit
function autovolgende(x) {
    if (x) {
        autoVolgende = true;
        document.getElementById('autoVolgendeAan').className = "instelButton geluidButton gekozen";
        document.getElementById('autoVolgendeUit').className = "instelButton geluidButton";
    } else {
        autoVolgende = false;
        document.getElementById('autoVolgendeUit').className = "instelButton geluidButton gekozen";
        document.getElementById('autoVolgendeAan').className = "instelButton geluidButton";
    }
}
