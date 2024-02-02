const families = [
    {
        fatherName: "John",
        motherName: "Jane",
        childrenNumber: "3",
    },
    {
        fatherName: "Jack",
        motherName: "Jen",
        childrenNumber: "5",
    }
]

async function addingAndCheckingOnFamilyMember(families){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            //adding total number of family members to an array Object
            try{
                families.map((family) => {
                    let totalNumberOfFamilyMembers = parseInt(family.childrenNumber) + 2
                    family.totalNumberOfFamilyMembers = totalNumberOfFamilyMembers
                })

                //looping though an array of family to see if the fatherName is Yves
                for(let i = 0; i < families.length; i++){
                    let single = families[i]
                    if(single.fatherName.toLowerCase() === 'yves'){
                        //throwing error if Yves is not an allowed dad by using 
                        throw new Error("Yves is not an allowed dad 2022")
                    }
                }


                resolve(families)
            } catch(error){
                reject(error)
            }
        },1000)
    })
}

//handling the state of promise
//using of async and wait

async function HandlingError(families){
    try{
        const data = await addingAndCheckingOnFamilyMember(families)
        console.log("successfully family member added: ", data)
    } catch(error){
        console.error("Error:", error)
    }
}

HandlingError(families)