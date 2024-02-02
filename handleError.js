let student = {
    name: 'John',
    age: 21,
}


function setStudentAgeApi(student, age){
    return new Promise ((resolve, reject) => {
        student.age = age;
        setTimeout(() => {
            if( age < 0){
                reject("Bad Age")
            } else {
                resolve(student)
            }
        }, 500);
    })
}


//handling the state of promise

//trying to update by using positive age
setStudentAgeApi(student, 23)
    .then((data) => {
        console.log("successfully updated: ", data)
    })
    .catch((error) => {
        console.error("Error:", error)
    })


//trying to update by using negative age

setStudentAgeApi(student, -23)
    .then((data) => {
        console.log("successfully updated: ", data)  
    })
    .catch((error) => {
        console.error("Error:", error)
    })
