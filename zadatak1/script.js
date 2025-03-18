const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];

function getStudentAverage(student) {
  let zbir = 0;
  for (let i = 0; i < student.ocjene.length; i++) {
    zbir += student.ocjene[i];
  }
  return zbir / student.ocjene.length;
}

// a)
function StudentsAboveAverage(studenti) {
  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let avg = getStudentAverage(student);

    if (avg > 8.5) {
      console.log(`${student.ime} ${student.prezime}, prosjek: ${avg}`);
    } else {
      console.log(`Student: ${student.ime}`);
    }
  }
}

// b)
function BestStudent(studenti) {
  let najbolji = studenti[0];
  let zbir = 0;

  for (let k = 0; k < najbolji.ocjene.length; k++) {
    zbir += najbolji.ocjene[k];
  }
  let maxavg = zbir / najbolji.ocjene.length;

  // Prođi kroz ostale studente
  for (let i = 1; i < studenti.length; i++) {
    let zbirTrenutnog = 0;

    for (let j = 0; j < studenti[i].ocjene.length; j++) {
      zbirTrenutnog += studenti[i].ocjene[j];
    }

    let currentAverage = zbirTrenutnog / studenti[i].ocjene.length;

    if (currentAverage > maxavg) {
      najbolji = studenti[i];
      maxavg = currentAverage;
    }
  }

  console.log(`${najbolji.ime} ${najbolji.prezime} sa prosjekom ${maxavg}`);
}

// c)
function meanAverage(studenti) {
  let zbirSvihavga = 0;

  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let zbir = 0;

    for (let j = 0; j < student.ocjene.length; j++) {
      zbir += student.ocjene[j];
    }

    let avg = zbir / student.ocjene.length;
    zbirSvihavga += avg;
  }

  let konacniavg = zbirSvihavga / studenti.length;
  console.log(`Prosječan prosjek svih studenata je: ${konacniavg}`);
}

// d)
function sortByAverage(studenti) {
  for (let i = 0; i < studenti.length - 1; i++) {
    for (let j = 0; j < studenti.length - i - 1; j++) {
      let zbirA = 0;
      for (let k = 0; k < studenti[j].ocjene.length; k++) {
        zbirA += studenti[j].ocjene[k];
      }
      let avgA = zbirA / studenti[j].ocjene.length;

      let zbirB = 0;
      for (let k = 0; k < studenti[j + 1].ocjene.length; k++) {
        zbirB += studenti[j + 1].ocjene[k];
      }
      let avgB = zbirB / studenti[j + 1].ocjene.length;

      if (avgB > avgA) {
        // swap
        let temp = studenti[j];
        studenti[j] = studenti[j + 1];
        studenti[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < studenti.length; i++) {
    let zbir = 0;
    for (let j = 0; j < studenti[i].ocjene.length; j++) {
      zbir += studenti[i].ocjene[j];
    }
    let avg = zbir / studenti[i].ocjene.length;
    console.log(`${studenti[i].ime} ${studenti[i].prezime}, prosjek: ${avg}`);
  }
}

// e)
function addAverage(studenti) {
  let noviNiz = [];

  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let zbir = 0;

    for (let j = 0; j < student.ocjene.length; j++) {
      zbir += student.ocjene[j];
    }

    let avg = zbir / student.ocjene.length;

    let noviStudent = {
      ime: student.ime,
      prezime: student.prezime,
      godina: student.godina,
      ocjene: student.ocjene,
      avg: avg,
    };

    noviNiz.push(noviStudent);
  }

  return noviNiz;
}

console.log("a) ");
StudentsAboveAverage(studenti);

console.log("b) ");
BestStudent(studenti);

console.log("c) ");
meanAverage(studenti);

console.log("d) ");
sortByAverage(studenti);

console.log("e) ");
const studentsWithAverage = addAverage(studenti);
console.log(studentsWithAverage);
