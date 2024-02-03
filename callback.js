//showing how callback function is working

let setStudentAgeApi = (student,age) => {
    console.log("1.starting....")
    setTimeout(() => {
        console.log("2.Setting age for the student")
        student.age = age;
        console.log(`The students age is ${student.age}`)
    }, 500);
    console.log("3.Done....")
}

let student ={
    name: "John",
    age: 40
}

setStudentAgeApi(student, 50)
