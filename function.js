var gradeA;
var gradeB;
var gradeC;
var gradeF;
var input;


var input = prompt('Please input the score!');


function GradeA() {
    for (let gradeA = 81; gradeA < 100; gradeA++) {
        alert('Grade A');
    }
}

function GradeB() {
    for (let gradeB = 70; gradeB < 80; gradeB++) {
        console.log('Grade B');
    }
}

function GradeC() {
    for (let gradeC = 50; gradeC < 69; gradeC++) {
        console.log('Grade C');
    }
}

function GradeF() {
    for (let gradeF = 0; gradeF < 49; gradeF++) {
        console.log('Grade F');
    }
}


function getScores() {
    if (input >= 81 && input <= 100) {
        alert('GradeA');
    } else if (input >= 70 && input <= 80) {
        alert('GradeB');
    } else if (input >= 50 && input <= 69) {
        alert('GradeC');
    } else if (input >= 0 && input <= 49) {
        alert('GradeF');
    }
}
getScores();

var studentsScores = [score1, score2, score3, score4, score5];

class InputScores {
    constructor(score1, score2, score3, score4, score5) {
        this.score1 = score1;
        this.score2 = score2;
        this.score3 = score3;
        this.score4 = score4;
        this.score5 = score5;

    }
}


studentsScores = [score1, score2, score3, score4, score5];
studentsScores.push(99, 67, 23);
studentsScores.pop();
var input = studentsScores;