// created data for subjects
let students = [
    { name: "DBMS", progress: 50 },
    { name: "javascript", progress: 75 },
    { name: "DSA", progress: 40 }
];

// selecting students from html
let container = document.getElementById("subjects");

let total = 0;

// loop through subjects array
for (let i = 0; i < students.length; i++) {

    let student = students[i];

    total += student.progress;

    let p = document.createElement("p");

    
    p.innerText = student.name + " " + student.progress + "%";

    container.appendChild(p);
}


let average = total / students.length;

let avgElement = document.getElementById("average");
avgElement.innerText = "Average Progress: " + average + "%";

