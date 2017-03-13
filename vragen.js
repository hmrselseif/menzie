aantalPogingen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //array die ver vraag het aantal pogingen bij houd.
score = 0; //variable die de score bijhoud

//Functie voor knoppen met antwoorden
function ant(nr, goed) {
    //nr = nummer van vraag;
    //goed = boolean of het antwoord goed is;
    laatsteVraag = nr;
    //update laatsteVraag voor later gebruik

    //krijg de DOM van het goede antwoord
    correctID = 'goedAntwoord' + nr;
    correct = document.getElementById(correctID);


    if (goed) {
        //vraag is geod beantwoord
        if (geluid) {
            //speel geluid af als dit zo is ingestelet
            document.getElementById('klapAudio').play();
        }
        //laat de div met reactie (feedback) zien
        document.getElementById('feedback').style.display = 'block';


        if (aantalPogingen[nr] == 0) {
            //In een keer goed
            document.getElementById('feedback').innerHTML = 'Goed zo! In een keer goed. +2 punten';
            //laat de gebruiker weten dat het antwoord goed is, en ze 2 punten krijgen
            score += 2;
            //voeg 2 toe aan de score
            if (autoVolgende) {
                //als zo ingestelt dat automatisch naar volgende, doe dit dan.
                volgendeVrg();
            } else {
                //als dit niet is ingestelt, laat een knop zien die je naar de volgede vraag laat gaan
                document.getElementById('volgendevraagknop').style.display = 'block';
            }
        } else {
            //Als je niet in een keer goed hebt, maar in twee keer:
            document.getElementById('feedback').innerHTML = 'Goed zo! Dat is juist. +1 punt';
            //laat de gebruiker weten dat het antwoord goed is, en ze 1 punt krijgen
            score += 1;
            //voeg 2 toe aan de score

            if (autoVolgende) {
                //als zo ingestelt dat automatisch naar volgende, doe dit dan.
                volgendeVrg();
            } else {
                //als dit niet is ingestelt, laat een knop zien die je naar de volgede vraag laat gaan
                document.getElementById('volgendevraagknop').style.display = 'block';

            }
        }


    } else if (aantalPogingen[nr] == 0 && niv == '1') {
        //als je het fout hebt voor de eerste keer (en op makkelijk staat)
        document.getElementById('feedback').style.display = 'block'
        //laat de div met reactie (feedback) zien
        document.getElementById('feedback').innerHTML = 'Dat klopt niet. Probeer het nog een keer!';
        //laat de gebruiker weten dat ze het nog een keer mogen proberen
        aantalPogingen[nr] = 1;
        //houd bij dat er al eens een antwoord is gegeven
    } else {
        if (geluid) {
            //speel audio als de gebruiker dit heeft ingeschakelt
            document.getElementById('awwAudio').play()
        }

        document.getElementById('feedback').innerHTML = 'Helaas. Het goede antwoord is nu groen.'; //laat de gebruiker weten dat ze het fout hebben
        document.getElementById('feedback').style.display = 'block'; //laat de feedvack zien
        correct.style.backgroundColor = 'lightgreen'; //kleur het goede antwoord
        correct.style.borderColor = 'lightgreen'; //kleur de rand van het goede antwoord
        document.getElementById('volgendevraagknop').style.display = 'block'; //laat de knop voor volgende vraag zien
    }
}


function volgendeVrg() {
    // gaat naar volgende vraag
    x = laatsteVraag; //huidige vraag
    y = laatsteVraag + 1; //volgende vraag
    document.getElementById('vraag' + y).style.display = 'block'; //laat volgende vraag zien
    document.getElementById('vraag' + x).style.display = 'none'; //maak vorige vraag onzichtbaar
    document.getElementById('volgendevraagknop').style.display = 'none'; //verbergt de 'volgende' knop
    document.getElementById('feedback').innerHTML = ''; //maakt de feeback div leeg
    if (y == 11) {
        //als laatste vraag, dan doe funcite einde
        einde();
    }
    document.getElementById('progressBar').style.width = (x/10) * 400 + 'px';
}

//funcite die einde spel handelt
function einde() {
    //haalt datum op
    datum = new Date();
    cookies = document.cookie;
    //haalt cookie op
    document.cookie = cookies + datum.getDay() + ' ' + score; //voegt inhoud toe aan cookie


    //geeft commentaar op hoe goed er gespeeld is
    if (score > 10) {
        if (score > 16) {
            adv = 'U doet het erg goed, en maakt (bijna) geen fouten.';
            if (geluid) {
                document.getElementById('applAudio').play()
            }
        } else {
            adv = 'U bent op het goede pad. Blijf oefenen';
        }
    } else {
        adv = 'Dat ging niet zo goed. Blijf oefenen!';
    }

    //laat score en advies/commentaar zien
    document.getElementById('antwoordVraag11').innerHTML = 'Uw score is ' + score + '. <br> ' + adv;
    document.getElementById('listitemeraf').innerHTML = ' ';
    document.getElementById('listitemerbij').innerHTML = '<li>14 maart: ' + score + ' punten.';
    //voegt uitslag toe aan scoreboprd
    document.getElementById('antwoordVraag11').style.display = 'block'; //laat laatstevraag zien.

}
