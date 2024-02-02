function ObjectAndArray(array){
    let desiredResult = {
      female:[],
      male:[]
    }
    
    array.map((item) => {
      let [name, age,gender] = item.split(",");
      let [firstname,lastname] = name.split(" ");
      let formattedInfo = {
        "second-name": lastname,
        age: parseInt(age),
      }
      let formattedPersonalInfo = {
        [firstname]: formattedInfo,
      }
      if (gender.toLowerCase() === "female") {
        
          desiredResult.female.push(formattedPersonalInfo);
      } if(gender === "male") {
          desiredResult.male.push(formattedPersonalInfo);
      } 
  
      
    })
    return desiredResult
  }
    
    
let value =ObjectAndArray(["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male","Patrick wyne, 40,male", "Ruth, 23, female"])
console.dir(value, {depth: null})
    