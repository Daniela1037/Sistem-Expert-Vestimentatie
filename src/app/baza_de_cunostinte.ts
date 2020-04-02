const question1 = { id: 1, question: "Iti place sa mergi la petreceri?" }
const question2 = { id: 2, question: "Te consideri o persoana dezinhibata?" }
const question3 = { id: 3, question: "Preferi mai mult sa mergi in club sau acasa cu prietenii?" }
const question4 = { id: 4, question: "Iti place sa te imbraci colorat?" }
const question5 = { id: 5, question: "Preferi muzica din anii 70-90?" }
const question6 = { id: 6, question: "Iti place sa iesi in oras?" }
const question7 = { id: 7, question: "Iti place mai mult sa iesi cu prietenii decat sa te plimbi singur?" }
const question8 = { id: 8, question: "Ai alege un local vintage in locul unui local cu jocuri?" }
const question9 = { id: 9, question: "Ti-ar placea sa mergi la un festival de muzica Rock?" }
const question10 = { id: 10, question: "Iti plac filmele istorice?" }
const question11 = { id: 11, question: "Ai alege sa mergi in vacanta cu cortul?" }
const question12 = { id: 12, question: "Te consideri o persoana cu spiritul liber?" }
const question13 = { id: 13, question: "Iti plac hainele de piele cu tinte?" }
const question14 = { id: 14, question: "Ai dori sa vizitezi ruine ale unor civilizatii apuse?" }
const question15 = { id: 15, question: "Ai alege sa te inspiri din epoca victoriana pentru o tinuta de ocazie?" }
const question16 = { id: 16, question: "Preferi mai mult sa mergi la un eveniment sportiv decat la un concert?" }
const question17 = { id: 17, question: "Iti place sa atragi atentia in public?" }
const question18 = { id: 18, question: "Investesti des o suma considerabila in garderoba?" }
const question19 = { id: 19, question: "Lucrezi intr-un birou in mare parte a zilei?" }
const question20 = { id: 20, question: "Preferi tinutele extravagante decat cele office?" }
const question21 = { id: 21, question: "Te inspiri de la celebritati pentru tinutele tale?" }
const question22 = { id: 22, question: "Iti cumperi haine SH?" }
const question23 = { id: 23, question: "Porti pantofi cu toc in viata de zi cu zi?" }
const question24 = { id: 24, question: "Iti asortezi mereu geanta cu pantofii?" }
const question25 = { id: 25, question: "Te inspiri, ca femeie din garderobele barbatesti?" }


function rule1()  {
    if(this.question1 === true)
        return question2;
}

function rule2()  {
    if(this.question1 === false)
        return question6;
}
function rule3()  {
    if(this.question2 === true)
        return question3;
}

function rule4()  {
    if(this.question2 === false)
        return question17;
}
function rule5()  {
    if(this.question3 === true)
        return question4;
}

function rule6()  {
    if(this.question3 === false)
        return question6;
}

function rule7()  {
    if(this.question4 === true)
        return question7;
}

function rule8()  {
    if(this.question4 === false)
        return question5;
}

function rule9()  {
    if(this.question5 === true)
        return question9;
}

function rule10()  {
    if(this.question5 === false)
        return question10;
}

function rule11()  {
    if(this.question6 === true)
        return question17;
}

function rule12()  {
    if(this.question6 === false)
        return question19;
}

function rule13()  {
    if(this.question7 === true)
        return question8;
}

function rule14()  {
    if(this.question7 === false)
        return question14;
}

function rule15()  {
    if(this.question8 === true)
        return question15;
}

function rule16()  {
    if(this.question8 === false)
        return question16;
}

function rule17()  {
    if(this.question9 === true)
        return question11;
}

function rule18()  {
    if(this.question9 === false)
        return question7;
}

function rule19()  {
    if(this.question10 === true)
        return question8;
}

function rule20()  {
    if(this.question10 === false)
        return question9;
}

function rule21()  {
    if(this.question11 === true)
        return question12;
}

function rule22()  {
    if(this.question11 === false)
        return question8;
}

function rule23()  {
    if(this.question12 === true)
        return question13;
}

function rule24()  {
    if(this.question12 === false)
        return question14;
}

function rule25()  {
    if(this.question13 === true)
        return 'Rock';
}

function rule26()  {
    if(this.question13 === false)
        return 'Minimalista';
}

function rule27()  {
    if(this.question14 === true)
        return question8;
}

function rule28()  {
    if(this.question14 === false)
        return question16;
}

function rule29()  {
    if(this.question15 === true)
        return 'Vintage';
}

function rule30()  {
    if(this.question15 === false)
        return question13;
}

function rule31()  {
    if(this.question16 === true)
        return 'Sport';
}

function rule32()  {
    if(this.question16 === false)
        return 'Rock';
}

function rule33()  {
    if(this.question17 === true)
        return question18;
}

function rule34()  {
    if(this.question17 === false)
        return question19;
}

function rule35()  {
    if(this.question18 === true)
        return question21;
}

function rule36()  {
    if(this.question18 === false)
        return question22;
}

function rule37()  {
    if(this.question19 === true)
        return question18;
}

function rule38()  {
    if(this.question19 === false)
        return question20;
}

function rule39()  {
    if(this.question20 === true)
        return question22;
}

function rule40()  {
    if(this.question20 === false)
        return question21;
}

function rule41()  {
    if(this.question21 === true)
        return question23;
}

function rule42()  {
    if(this.question21 === false)
        return question24;
}

function rule43()  {
    if(this.question22 === true)
        return question23;
}

function rule44()  {
    if(this.question22 === false)
        return question21;
}

function rule45()  {
    if(this.question23 === true)
        return question24;
}

function rule46()  {
    if(this.question23 === false)
        return question25;
}

function rule47()  {
    if(this.question24 === true)
        return 'Eleganta';
}

function rule48()  {
    if(this.question24 === false)
        return 'Casual';
}

function rule49()  {
    if(this.question25 === true)
        return 'Casual';
}

function rule50()  {
    if(this.question25 === false)
        return question24;
}

export const data = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18,
    question19,
    question20,
    question21,
    question22,
    question23,
    question24,
    question25,
]

export const rules = [
    rule1,
    rule2,
    rule3,
    rule4,
    rule5,
    rule6,
    rule7,
    rule8,
    rule9,
    rule10,
    rule11,
    rule12,
    rule13,
    rule14,
    rule15,
    rule16,
    rule17,
    rule18,
    rule19,
    rule20,
    rule21,
    rule22,
    rule23,
    rule24,
    rule25,
    rule26,
    rule27,
    rule28,
    rule29,
    rule30,
    rule31,
    rule32,
    rule33,
    rule34,
    rule35,
    rule36,
    rule37,
    rule38,
    rule39,
    rule40,
    rule41,
    rule42,
    rule43,
    rule44,
    rule45,
    rule46,
    rule47,
    rule48,
    rule49,
    rule50,
]