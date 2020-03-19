# SistemExpertVestimentatie

# Instalare

1. Trebuie sa aveti instalat node - https://nodejs.org/en/

2. Se ruleaza comanda: npm install -g @angular/cli

3. Se navigheaza in root-ul proiectului

4. Se ruleaza comanda: ng serve

5. Se poate accesa aplicatia in browser la adresa: http://localhost:4200/

# Functionalitate
    Note: Momentan nu se pot accesa decat urmatoarele 2 path-uri: "Da-Da-Da-Da-Da" si "Nu-Da-Da-Da"
    Baza de cunostinte este reprezentata de fisierul baza_de_cunostinte.ts si contine intrebari de forma:
        const question_1 = {
            question: "Iti place sa mergi la petreceri?",
            answer: true,
            next: {
                true: question_2,
                false: question_3,
            },
        }

    Cand se raspunde da, se trece la intrebarea 2, iar cand se raspunde nu, se trece la intrebarea 3.
    Daca intrebarea are campul result pe aceasta, inseamna ca este o intrebare finala si se va returna rezultatul pe baza selectiilor.

# Demo

1. Raspundeti la cateva intrebari

![Alt text](/docs-question.PNG?raw=true "Optional Title")

2. Butonul de Next e inlocuit cu cel de Submit cand se ajunge la ultima intrebare

![Alt text](/docs-submit.PNG?raw=true "Optional Title")

3. In functie de raspunsuri, se afiseaza poza cu vestimentatia potrivita personalitatii

![Alt text](/docs-results.PNG?raw=true "Optional Title")
