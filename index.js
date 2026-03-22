const students = [
  { firstName: "James", lastName: "Smith", age: 19, matricNo: "MAT/2024/001" },
  { firstName: "Mary", lastName: "Johnson", age: 20, matricNo: "MAT/2024/002" },
  { firstName: "Robert", lastName: "Williams", age: 21, matricNo: "MAT/2024/003" },
  { firstName: "Patricia", lastName: "Brown", age: 22, matricNo: "MAT/2024/004" },
  { firstName: "John", lastName: "Jones", age: 19, matricNo: "MAT/2024/005" },
  { firstName: "Jennifer", lastName: "Garcia", age: 20, matricNo: "MAT/2024/006" },
  { firstName: "Michael", lastName: "Miller", age: 21, matricNo: "MAT/2024/007" },
  { firstName: "Linda", lastName: "Davis", age: 22, matricNo: "MAT/2024/008" },
  { firstName: "William", lastName: "Rodriguez", age: 19, matricNo: "MAT/2024/009" },
  { firstName: "Barbara", lastName: "Martinez", age: 20, matricNo: "MAT/2024/010" },
  { firstName: "David", lastName: "Hernandez", age: 21, matricNo: "MAT/2024/011" },
  { firstName: "Susan", lastName: "Lopez", age: 22, matricNo: "MAT/2024/012" },
  { firstName: "Richard", lastName: "Gonzalez", age: 19, matricNo: "MAT/2024/013" },
  { firstName: "Jessica", lastName: "Wilson", age: 20, matricNo: "MAT/2024/014" },
  { firstName: "Joseph", lastName: "Anderson", age: 21, matricNo: "MAT/2024/015" },
  { firstName: "Sarah", lastName: "Thomas", age: 22, matricNo: "MAT/2024/016" },
  { firstName: "Thomas", lastName: "Taylor", age: 19, matricNo: "MAT/2024/017" },
  { firstName: "Karen", lastName: "Moore", age: 20, matricNo: "MAT/2024/018" },
  { firstName: "Charles", lastName: "Jackson", age: 21, matricNo: "MAT/2024/019" },
  { firstName: "Lisa", lastName: "Martin", age: 22, matricNo: "MAT/2024/020" },
  { firstName: "Christopher", lastName: "Lee", age: 19, matricNo: "MAT/2024/021" },
  { firstName: "Nancy", lastName: "Perez", age: 20, matricNo: "MAT/2024/022" },
  { firstName: "Daniel", lastName: "Thompson", age: 21, matricNo: "MAT/2024/023" },
  { firstName: "Betty", lastName: "White", age: 22, matricNo: "MAT/2024/024" },
  { firstName: "Matthew", lastName: "Harris", age: 19, matricNo: "MAT/2024/025" },
  { firstName: "Margaret", lastName: "Sanchez", age: 20, matricNo: "MAT/2024/026" },
  { firstName: "Anthony", lastName: "Clark", age: 21, matricNo: "MAT/2024/027" },
  { firstName: "Sandra", lastName: "Ramirez", age: 22, matricNo: "MAT/2024/028" },
  { firstName: "Mark", lastName: "Lewis", age: 19, matricNo: "MAT/2024/029" },
  { firstName: "Ashley", lastName: "Robinson", age: 20, matricNo: "MAT/2024/030" },
  { firstName: "Donald", lastName: "Walker", age: 21, matricNo: "MAT/2024/031" },
  { firstName: "Dorothy", lastName: "Young", age: 22, matricNo: "MAT/2024/032" },
  { firstName: "Steven", lastName: "Allen", age: 19, matricNo: "MAT/2024/033" },
  { firstName: "Kimberly", lastName: "King", age: 20, matricNo: "MAT/2024/034" },
  { firstName: "Paul", lastName: "Wright", age: 21, matricNo: "MAT/2024/035" },
  { firstName: "Emily", lastName: "Scott", age: 22, matricNo: "MAT/2024/036" },
  { firstName: "Andrew", lastName: "Torres", age: 19, matricNo: "MAT/2024/037" },
  { firstName: "Donna", lastName: "Nguyen", age: 20, matricNo: "MAT/2024/038" },
  { firstName: "Kenneth", lastName: "Hill", age: 21, matricNo: "MAT/2024/039" },
  { firstName: "Michelle", lastName: "Flores", age: 22, matricNo: "MAT/2024/040" },
  { firstName: "Joshua", lastName: "Green", age: 19, matricNo: "MAT/2024/041" },
  { firstName: "Carol", lastName: "Adams", age: 20, matricNo: "MAT/2024/042" },
  { firstName: "Kevin", lastName: "Nelson", age: 21, matricNo: "MAT/2024/043" },
  { firstName: "Amanda", lastName: "Baker", age: 22, matricNo: "MAT/2024/044" },
  { firstName: "Brian", lastName: "Hall", age: 19, matricNo: "MAT/2024/045" },
  { firstName: "Melissa", lastName: "Rivera", age: 20, matricNo: "MAT/2024/046" },
  { firstName: "George", lastName: "Campbell", age: 21, matricNo: "MAT/2024/047" },
  { firstName: "Deborah", lastName: "Mitchell", age: 22, matricNo: "MAT/2024/048" },
  { firstName: "Timothy", lastName: "Carter", age: 19, matricNo: "MAT/2024/049" },
  { firstName: "Stephanie", lastName: "Roberts", age: 20, matricNo: "MAT/2024/050" },
  { firstName: "Ronald", lastName: "Gomez", age: 21, matricNo: "MAT/2024/051" },
  { firstName: "Sharon", lastName: "Phillips", age: 22, matricNo: "MAT/2024/052" },
  { firstName: "Edward", lastName: "Evans", age: 19, matricNo: "MAT/2024/053" },
  { firstName: "Cynthia", lastName: "Turner", age: 20, matricNo: "MAT/2024/054" },
  { firstName: "Jason", lastName: "Diaz", age: 21, matricNo: "MAT/2024/055" },
  { firstName: "Rebecca", lastName: "Parker", age: 22, matricNo: "MAT/2024/056" },
  { firstName: "Jeffrey", lastName: "Cruz", age: 19, matricNo: "MAT/2024/057" },
  { firstName: "Kathleen", lastName: "Edwards", age: 20, matricNo: "MAT/2024/058" },
  { firstName: "Ryan", lastName: "Collins", age: 21, matricNo: "MAT/2024/059" },
  { firstName: "Amy", lastName: "Reyes", age: 22, matricNo: "MAT/2024/060" },
  { firstName: "Jacob", lastName: "Stewart", age: 19, matricNo: "MAT/2024/061" },
  { firstName: "Angela", lastName: "Morris", age: 20, matricNo: "MAT/2024/062" },
  { firstName: "Gary", lastName: "Morales", age: 21, matricNo: "MAT/2024/063" },
  { firstName: "Shirley", lastName: "Murphy", age: 22, matricNo: "MAT/2024/064" },
  { firstName: "Nicholas", lastName: "Cook", age: 19, matricNo: "MAT/2024/065" },
  { firstName: "Anna", lastName: "Rogers", age: 20, matricNo: "MAT/2024/066" },
  { firstName: "Eric", lastName: "Gutierrez", age: 21, matricNo: "MAT/2024/067" },
  { firstName: "Brenda", lastName: "Ortiz", age: 22, matricNo: "MAT/2024/068" },
  { firstName: "Jonathan", lastName: "Morgan", age: 19, matricNo: "MAT/2024/069" },
  { firstName: "Pamela", lastName: "Cooper", age: 20, matricNo: "MAT/2024/070" },
  { firstName: "Stephen", lastName: "Peterson", age: 21, matricNo: "MAT/2024/071" },
  { firstName: "Emma", lastName: "Bailey", age: 22, matricNo: "MAT/2024/072" },
  { firstName: "Larry", lastName: "Reed", age: 19, matricNo: "MAT/2024/073" },
  { firstName: "Nicole", lastName: "Kelly", age: 20, matricNo: "MAT/2024/074" },
  { firstName: "Justin", lastName: "Howard", age: 21, matricNo: "MAT/2024/075" },
  { firstName: "Helen", lastName: "Ramos", age: 22, matricNo: "MAT/2024/076" },
  { firstName: "Scott", lastName: "Kim", age: 19, matricNo: "MAT/2024/077" },
  { firstName: "Samantha", lastName: "Cox", age: 20, matricNo: "MAT/2024/078" },
  { firstName: "Brandon", lastName: "Ward", age: 21, matricNo: "MAT/2024/079" },
  { firstName: "Christine", lastName: "Richardson", age: 22, matricNo: "MAT/2024/080" },
  { firstName: "Benjamin", lastName: "Watson", age: 19, matricNo: "MAT/2024/081" },
  { firstName: "Debra", lastName: "Brooks", age: 20, matricNo: "MAT/2024/082" },
  { firstName: "Samuel", lastName: "Chavez", age: 21, matricNo: "MAT/2024/083" },
  { firstName: "Rachel", lastName: "Wood", age: 22, matricNo: "MAT/2024/084" },
  { firstName: "Raymond", lastName: "James", age: 19, matricNo: "MAT/2024/085" },
  { firstName: "Carolyn", lastName: "Bennett", age: 20, matricNo: "MAT/2024/086" },
  { firstName: "Gregory", lastName: "Gray", age: 21, matricNo: "MAT/2024/087" },
  { firstName: "Janet", lastName: "Mendoza", age: 22, matricNo: "MAT/2024/088" },
  { firstName: "Frank", lastName: "Ruiz", age: 19, matricNo: "MAT/2024/089" },
  { firstName: "Catherine", lastName: "Hughes", age: 20, matricNo: "MAT/2024/090" },
  { firstName: "Alexander", lastName: "Price", age: 21, matricNo: "MAT/2024/091" },
  { firstName: "Maria", lastName: "Alvarez", age: 22, matricNo: "MAT/2024/092" },
  { firstName: "Patrick", lastName: "Castillo", age: 19, matricNo: "MAT/2024/093" },
  { firstName: "Frances", lastName: "Sanders", age: 20, matricNo: "MAT/2024/094" },
  { firstName: "Raymond", lastName: "Patel", age: 21, matricNo: "MAT/2024/095" },
  { firstName: "Gloria", lastName: "Myers", age: 22, matricNo: "MAT/2024/096" },
  { firstName: "Jack", lastName: "Long", age: 19, matricNo: "MAT/2024/097" },
  { firstName: "Joyce", lastName: "Ross", age: 20, matricNo: "MAT/2024/098" },
  { firstName: "Dennis", lastName: "Foster", age: 21, matricNo: "MAT/2024/099" },
  { firstName: "Evelyn", lastName: "Jimenez", age: 22, matricNo: "MAT/2024/100" },
  { firstName: "Jerry", lastName: "Powell", age: 19, matricNo: "MAT/2024/101" },
  { firstName: "Hannah", lastName: "Jenkins", age: 20, matricNo: "MAT/2024/102" },
  { firstName: "Walter", lastName: "Perry", age: 21, matricNo: "MAT/2024/103" },
  { firstName: "Megan", lastName: "Russell", age: 22, matricNo: "MAT/2024/104" },
  { firstName: "Peter", lastName: "Sullivan", age: 19, matricNo: "MAT/2024/105" },
  { firstName: "Cheryl", lastName: "Bell", age: 20, matricNo: "MAT/2024/106" },
  { firstName: "Harold", lastName: "Coleman", age: 21, matricNo: "MAT/2024/107" },
  { firstName: "Martha", lastName: "Butler", age: 22, matricNo: "MAT/2024/108" },
  { firstName: "Douglas", lastName: "Henderson", age: 19, matricNo: "MAT/2024/109" },
  { firstName: "Marie", lastName: "Barnes", age: 20, matricNo: "MAT/2024/110" },
  { firstName: "Henry", lastName: "Gonzales", age: 21, matricNo: "MAT/2024/111" },
  { firstName: "Diane", lastName: "Fisher", age: 22, matricNo: "MAT/2024/112" },
  { firstName: "Carl", lastName: "Harrison", age: 19, matricNo: "MAT/2024/113" },
  { firstName: "Julie", lastName: "Gibson", age: 20, matricNo: "MAT/2024/114" },
  { firstName: "Arthur", lastName: "McDonald", age: 21, matricNo: "MAT/2024/115" },
  { firstName: "Joyce", lastName: "Cruz", age: 22, matricNo: "MAT/2024/116" },
  { firstName: "Ryan", lastName: "Marshall", age: 19, matricNo: "MAT/2024/117" },
  { firstName: "Alice", lastName: "Owens", age: 20, matricNo: "MAT/2024/118" },
  { firstName: "Roger", lastName: "Dixon", age: 21, matricNo: "MAT/2024/119" },
  { firstName: "Jean", lastName: "Rose", age: 22, matricNo: "MAT/2024/120" },
  { firstName: "Joe", lastName: "Stone", age: 19, matricNo: "MAT/2024/121" },
  { firstName: "Julia", lastName: "Hawkins", age: 20, matricNo: "MAT/2024/122" },
  { firstName: "Juan", lastName: "Dunn", age: 21, matricNo: "MAT/2024/123" },
  { firstName: "Judith", lastName: "Perkins", age: 22, matricNo: "MAT/2024/124" },
  { firstName: "Wayne", lastName: "Hudson", age: 19, matricNo: "MAT/2024/125" },
  { firstName: "Theresa", lastName: "Spencer", age: 20, matricNo: "MAT/2024/126" },
  { firstName: "Louis", lastName: "Gardner", age: 21, matricNo: "MAT/2024/127" },
  { firstName: "Kelly", lastName: "Stephens", age: 22, matricNo: "MAT/2024/128" },
  { firstName: "Johnny", lastName: "Payne", age: 19, matricNo: "MAT/2024/129" },
  { firstName: "Christina", lastName: "Pierce", age: 20, matricNo: "MAT/2024/130" },
  { firstName: "Willie", lastName: "Berry", age: 21, matricNo: "MAT/2024/131" },
  { firstName: "Victoria", lastName: "Matthews", age: 22, matricNo: "MAT/2024/132" },
  { firstName: "Bobby", lastName: "Arnold", age: 19, matricNo: "MAT/2024/133" },
  { firstName: "Lauren", lastName: "Wagner", age: 20, matricNo: "MAT/2024/134" },
  { firstName: "Billy", lastName: "Willis", age: 21, matricNo: "MAT/2024/135" },
  { firstName: "Joan", lastName: "Ray", age: 22, matricNo: "MAT/2024/136" },
  { firstName: "Bruce", lastName: "Watkins", age: 19, matricNo: "MAT/2024/137" },
  { firstName: "Theresa", lastName: "Olson", age: 20, matricNo: "MAT/2024/138" },
  { firstName: "Eugene", lastName: "Carroll", age: 21, matricNo: "MAT/2024/139" },
  { firstName: "Doris", lastName: "Duncan", age: 22, matricNo: "MAT/2024/140" },
  { firstName: "Kyle", lastName: "Snyder", age: 19, matricNo: "MAT/2024/141" },
  { firstName: "Madison", lastName: "Hart", age: 20, matricNo: "MAT/2024/142" },
  { firstName: "Ralph", lastName: "Cunningham", age: 21, matricNo: "MAT/2024/143" },
  { firstName: "Olivia", lastName: "Bradley", age: 22, matricNo: "MAT/2024/144" },
  { firstName: "Dylan", lastName: "Lane", age: 19, matricNo: "MAT/2024/145" },
  { firstName: "Jacqueline", lastName: "Andrews", age: 20, matricNo: "MAT/2024/146" },
  { firstName: "Roy", lastName: "Kelley", age: 21, matricNo: "MAT/2024/147" },
  { firstName: "Amber", lastName: "Chavez", age: 22, matricNo: "MAT/2024/148" },
  { firstName: "Eugene", lastName: "Oliver", age: 19, matricNo: "MAT/2024/149" },
  { firstName: "Natalie", lastName: "Jacobs", age: 20, matricNo: "MAT/2024/150" },
  { firstName: "Jordan", lastName: "Grant", age: 21, matricNo: "MAT/2024/151" },
  { firstName: "Brittany", lastName: "Ferguson", age: 22, matricNo: "MAT/2024/152" },
  { firstName: "Alan", lastName: "Bowman", age: 19, matricNo: "MAT/2024/153" },
  { firstName: "Kayla", lastName: "Cross", age: 20, matricNo: "MAT/2024/154" },
  { firstName: "Harry", lastName: "Weaver", age: 21, matricNo: "MAT/2024/155" },
  { firstName: "Alexis", lastName: "Lucas", age: 22, matricNo: "MAT/2024/156" },
  { firstName: "Wayne", lastName: "Burns", age: 19, matricNo: "MAT/2024/157" },
  { firstName: "Danielle", lastName: "Garza", age: 20, matricNo: "MAT/2024/158" },
  { firstName: "Terry", lastName: "West", age: 21, matricNo: "MAT/2024/159" },
  { firstName: "Tiffany", lastName: "Jordan", age: 22, matricNo: "MAT/2024/160" },
  { firstName: "Gerald", lastName: "Chapman", age: 19, matricNo: "MAT/2024/161" },
  { firstName: "Vanessa", lastName: "Simmons", age: 20, matricNo: "MAT/2024/162" },
  { firstName: "Sean", lastName: "Farmer", age: 21, matricNo: "MAT/2024/163" },
  { firstName: "Alicia", lastName: "Zimmerman", age: 22, matricNo: "MAT/2024/164" },
  { firstName: "Philip", lastName: "Dawson", age: 19, matricNo: "MAT/2024/165" },
  { firstName: "Courtney", lastName: "Holt", age: 20, matricNo: "MAT/2024/166" },
  { firstName: "Carl", lastName: "Williamson", age: 21, matricNo: "MAT/2024/167" },
  { firstName: "Tara", lastName: "Bridges", age: 22, matricNo: "MAT/2024/168" },
  { firstName: "Randy", lastName: "Schwartz", age: 19, matricNo: "MAT/2024/169" },
  { firstName: "Brittney", lastName: "Fleming", age: 20, matricNo: "MAT/2024/170" },
  { firstName: "Curtis", lastName: "Bates", age: 21, matricNo: "MAT/2024/171" },
  { firstName: "Robin", lastName: "Barker", age: 22, matricNo: "MAT/2024/172" },
  { firstName: "Jesse", lastName: "Norton", age: 19, matricNo: "MAT/2024/173" },
  { firstName: "Whitney", lastName: "Chambers", age: 20, matricNo: "MAT/2024/174" },
  { firstName: "Craig", lastName: "Barton", age: 21, matricNo: "MAT/2024/175" },
  { firstName: "Sabrina", lastName: "Haynes", age: 22, matricNo: "MAT/2024/176" },
  { firstName: "Clarence", lastName: "Watts", age: 19, matricNo: "MAT/2024/177" },
  { firstName: "Crystal", lastName: "Obrien", age: 20, matricNo: "MAT/2024/178" },
  { firstName: "Shawn", lastName: "Lawson", age: 21, matricNo: "MAT/2024/179" },
  { firstName: "Heather", lastName: "Munoz", age: 22, matricNo: "MAT/2024/180" },
  { firstName: "Trevor", lastName: "Webb", age: 19, matricNo: "MAT/2024/181" },
  { firstName: "Monica", lastName: "Patton", age: 20, matricNo: "MAT/2024/182" },
  { firstName: "Derrick", lastName: "Walton", age: 21, matricNo: "MAT/2024/183" },
  { firstName: "Alyssa", lastName: "Howell", age: 22, matricNo: "MAT/2024/184" },
  { firstName: "Travis", lastName: "Ramsey", age: 19, matricNo: "MAT/2024/185" },
  { firstName: "Candice", lastName: "Hubbard", age: 20, matricNo: "MAT/2024/186" },
  { firstName: "Carlos", lastName: "Salazar", age: 21, matricNo: "MAT/2024/187" },
  { firstName: "Latoya", lastName: "Harmon", age: 22, matricNo: "MAT/2024/188" },
  { firstName: "Mitchell", lastName: "Morrow", age: 19, matricNo: "MAT/2024/189" },
  { firstName: "Veronica", lastName: "Mack", age: 20, matricNo: "MAT/2024/190" }
]


console.log(`Number of students: ${students.length}`)
console.log(students[0])
console.log(students[0].firstName)
console.log(students[11].lastName)
console.log(students[11].lastName)



// students.forEach((student, index) => {
//   console.log( index + 1, student.firstName, student.lastName)
// })


// const studentNames = students.map((student) => {
//     return `${student.firstName} ${student.lastName}`
// })


// console.log(studentNames)


// function greeting({name,age,height}){
//     console.log(`Hello ${name}, you are ${age} years old and ${height} tall`)
// }

// // greeting("Debby", 25, 5.99)
// greeting({height:5.99, name:"Debby", age:25})

// const newGreeting = (name) => {
//     console.log(`Hello ${name}`)
// }

// newGreeting()





// const underageStudents = students.filter((student) => {
//     return student.age < 21
// })

// console.log(underageStudents)

// const namesWithJ = students.filter((student) => {
//     return student.firstName.startsWith("J")
// })
// console.log(namesWithJ)





// const nameAlice = students.find((student) => {
//     return student.firstName === "Alice"
// })

// console.log(nameAlice)


// const isNamePresent = students.some((student) => {
//     return student.firstName === "Alex"
// })
// console.log(isNamePresent)


const groceryList = [
  { item: "White Rice", quantity: 2, price: 3500 },
  { item: "Tomatoes", quantity: 6, price: 800 },
  { item: "Onions", quantity: 4, price: 600 },
  { item: "Vegetable Oil", quantity: 1, price: 2800 },
  { item: "Chicken", quantity: 2, price: 5500 },
  { item: "Eggs", quantity: 30, price: 3000 },
  { item: "Milk", quantity: 3, price: 1200 },
  { item: "Bread", quantity: 2, price: 900 },
  { item: "Butter", quantity: 1, price: 1500 },
  { item: "Garlic", quantity: 3, price: 300 },
  { item: "Carrots", quantity: 5, price: 500 },
  { item: "Potatoes", quantity: 4, price: 1200 },
  { item: "Pasta", quantity: 3, price: 750 },
  { item: "Tomato Paste", quantity: 4, price: 400 },
  { item: "Salt", quantity: 1, price: 250 },
  { item: "Sugar", quantity: 2, price: 1800 },
  { item: "Pepper", quantity: 2, price: 350 },
  { item: "Beans", quantity: 3, price: 2200 },
  { item: "Flour", quantity: 2, price: 1600 },
  { item: "Yogurt", quantity: 4, price: 2400 },
];

const totalCost = groceryList.reduce((total, item) => {
    return total + (item.quantity * item.price)
},0)

console.log(`Total cost of groceries: ${totalCost}`)