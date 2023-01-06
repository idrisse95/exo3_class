


// ```
// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.

// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

// # Vérification
// >Grâce


class Malade{
    constructor(nom,maladie,argent,poche,etat,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
    }

    goTo(leMalade){
        doctor.push.cabinet(leMalade)
    }
    takeCare(){
        if(Malade.argent>=60){
            console.log("tu es guerri");
        }
            
    }
}

let Marcus = new Malade("marcus","mal_indenté",100,[],"malade","")
let Optimus = new Malade("optimus","unsave",200,[],"malade","")
let Sangoku = new Malade("sangoku","404",80,[],"malade","")
let DarthVader = new Malade("darthVader","azmatique",110,[],"malade","")
let Semicolon = new Malade("semicolon","syntaxError",60,[],"malade","")

let doctor = {
    argent : 0,
    cabinet : ["Chat",],
    diagnostique(Malade){
        switch (Malade.maladie) {
            case "mal_indenté":Malade.poche.push("ctrl+maj+f");
            Malade.traitement = "ctrl+maj+f";
            
            break;
            case "unsave":Malade.poche.push("saveOnFocusChange");
            Malade.traitement = "saveOnFocusChange";
            break;
            case "404":Malade.poche.push("CheckLinkRelation");
            Malade.traitement = "CheckLinkRelation";
            break;
            case "azmatique":Malade.poche.push("Ventoline");
            Malade.traitement = "Ventoline";
            break;
            case "syntaxError":Malade.poche.push("f12+doc");
            Malade.traitement = "f12+doc";
            break;
        }

    }
,
    patientIn(patient){
        this.cabinet.push(patient)
        this.argent += 50;
        patient.argent -= 50;
        
    },
    patientOut(){
        this.cabinet.pop()
        
    }

}
doctor.patientIn(Marcus)
doctor.diagnostique(Marcus)
doctor.patientOut(Marcus)

doctor.patientIn(Optimus)
doctor.diagnostique(Optimus)
doctor.patientOut(Optimus)

doctor.patientIn(Sangoku)
doctor.diagnostique(Sangoku)
doctor.patientOut(Sangoku)

doctor.patientIn(DarthVader)
doctor.diagnostique(DarthVader)
doctor.patientOut(DarthVader)

doctor.patientIn(Semicolon)
doctor.diagnostique(Semicolon)
doctor.patientOut(Semicolon)

console.log(doctor);
console.log(Marcus);
console.log(Optimus);
console.log(Sangoku);
console.log(DarthVader);
console.log(Semicolon);

class tarif {
    constructor(prix,traitement){
    this.prix = prix;
    this.traitement = traitement;
}}

let tarif1 = new tarif(60,"crtl+maj+f");

let pharmacie = {
    caisse : 0,
    donnerTraitement(Malade){
        switch(Malade.traitement){
            case "ctrl+maj+f":
                if (Malade.argent>=60) {
                    pharmacie.caisse +=60
                    Malade.argent -=60
                    console.log("tient ton traitement");
                }
                else{
                    console.log("revien quand t'aura ");
                }
                break;
                
                case "saveOnFocusChange":
                    if (Malade.argent>=150) {
                        pharmacie.caisse +=150
                        Malade.argent -=150
                        console.log("tient ton traitement");
                    }
                    else{
                        console.log("revien quand t'aura ");
                    }
                    break;
                case "CheckLinkRelation":
                    if (Malade.argent>=35) {
                        pharmacie.caisse +=35
                        Malade.argent -=35
                        console.log("tient ton traitement");
                    }
                    else{
                        console.log("revien quand t'aura ");

                    }
                    break;
                case "Ventoline":
                    if (Malade.argent>=40) {

                        pharmacie.caisse +=40
                        Malade.argent -=40
                        console.log("tient ton traitement");
                    }
                    else{
                        console.log("revien quand t'aura ");
                    }
                    break;

                case "f12+doc":
                    if (Malade.argent>=20) {

                        pharmacie.caisse +=20
                        Malade.argent -=20
                        console.log("tient ton traitement");
                    }
                    else{
                        console.log("revien quand t'aura ");
                    }
                    break;

                default: console.log("nous avons r pour vs");

        }
    }
    }

pharmacie.donnerTraitement(Marcus);
pharmacie.donnerTraitement(Optimus);
pharmacie.donnerTraitement(Sangoku);
pharmacie.donnerTraitement(DarthVader);
pharmacie.donnerTraitement(Semicolon);
console.log(pharmacie);
console.log(Optimus.argent);