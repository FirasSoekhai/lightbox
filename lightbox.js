const deKleintjes = document.querySelectorAll('.klein');
const watWegMoet = document.querySelectorAll('.informatie');

// de nodelist watWegmoet in een array stoppen
const alleInfo = []

for(let i=0; i<watWegMoet.length; i++) {
    alleInfo.push(watWegMoet[i]);
    //element uit de DOM verwijderen
    watWegMoet[i].remove();
}
const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa times-circle-sk';
maakSluitKnop
function maakModaal(num) {
    //modaal element maken
    let modaal = document.createElement('div');
    modaal.id = 'modaal';
    modaal.addEventListener('click',verwijderModaal);
    let modaalInhoud = document.createElement('div');
    //modaal inhoud element maken
    modaalInhoud.className = 'modaalInhoud';
    modaalInhoud.innerHTML = alleInfo[num].innerHTML;
    modaalInhoud.addEventListener('click', function(e){
        e.stopPropagation();
    });
    modaalInhoud.prepend(maakSluitKnop);
    modaal.append(modaalInhoud);
    document.body.append(modaal);
}
for(let i=0; i<deKleintjes.length; i++) {
    deKleintjes[i].addEventListener('click', function() {
        maakModaal(i)
    });
}
function verwijderModaal() {
    document.getElementById('modaal').remove();
}