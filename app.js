//Program to create objects.
nameEl = document.getElementById("name");
incomeEl = document.getElementById("income");

const person1 = {
    name: "Pearl Krabs",
    age: 35,
    occupation: "Welder",
    income: 12000,
    professionalLicense: true
}

const person2 = {
    name: "Karen Plankton",
    age: 40,
    occupation: "Plumber",
    income: 13000,
    professionalLicense: false
}

const person3 = {
    name: "Squid Ward",
    age: 62,
    occupation: "Mason",
    income: 15000,
    professionalLicense: true
}

const person4 = {
    name: "Sponge bob",
    age: 37,
    occupation: "Engineer",
    income: 40000,
    professionalLicense: true
}

nameEl.innerText = "Name of person 4 is " + person4.name;
incomeEl.innerText = "Income of person 3 is " + person3.income +" BDT/month";

