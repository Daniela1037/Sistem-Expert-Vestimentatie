const question_1 = {
    question: "Iti place sa mergi la petreceri?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}
const question_2 = {
    question: "Te consideri o persoana dezinhibata?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}
const question_3 = {
    question: "Preferi sa mergi in club sau acasa cu prietenii?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}
const question_4 = {
    question: "Iti place sa te imbraci colorat?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}
const question_5 = {
    question: "Preferi muzica din anii 80-90?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
    result: 'pop',
}

const question_6 = {
    question: "Iti place sa iesi in oras?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}

const question_7 = {
    question: "Iti place mai mult sa iesi cu prietenii decat sa te plimbi singur?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
}
const question_8 = {
    question: "Ai alege o cafenea in locul unui local cu jocuri?",
    answer: true,
    next: {
        true: null,
        false: null,
    },
    result: 'relaxata',
}

question_1.next.true = question_2
question_2.next.true = question_3
question_3.next.true = question_4
question_4.next.true = question_5
question_5.next.true = null
question_1.next.false = question_6
question_6.next.true = question_7
question_7.next.true = question_8
question_8.next.true = null


export const data = [
    question_1,
    question_2,
    question_3,
    question_4,
    question_5,
    question_6,
    question_7,
    question_8,
]
