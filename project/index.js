 // calling Mongoose
let mongoose = require('mongoose');
//call .env
require('dotenv').config();
// call Person.js/ ModelSchema
const PersonModel = require ('./model/Person')

// connect to Mongodb
 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

// saving the model 

//1
run();

async function run() {
    try{
        const person= await PersonModel.create(
            {
                name : 'Melek',
                age : 17,
                favoriteFoods : ['tajiin','couscous']
            }
        )
        console.log(person)

        // 2 )              // findById
         //--------------------------------------------

    // const person = await PersonModel.findById("643871cf5aaaac5b09f4980a")
    // console.log(person)

    // 3 )              // find
         //--------------------------------------------
  
    // const person = await PersonModel.find()
    // console.log(person)

    // 4 )              // findOne
         //--------------------------------------------

    // const person = await PersonModel.findOne({name: "Melek"})
    // console.log(person)

    // 5 )              // FindById and Push to Array
    //      --------------------------------------------

//    const p = await PersonModel.findById("643875f4c3b7212b586767f1")
//     p.favoriteFoods.push("Hunmburger")
    
//     console.log(p)
    

    // 6 )              // findOneAndUpdate
         //--------------------------------------------

//     const person = await Person.findOneAndUpdate({name:'Sizar', age:27}, {age:20})
//
// 7 )              // findByIdAndRemove
         //--------------------------------------------

    // await Person.findByIdAndRemove({_id:"643437064fa6d5b5cec4ae16"})
    // console.log("the Person Has been removed")
    
    
    // 8 )              // deleteMany (remove)
         //--------------------------------------------
      
        //   await PersonModel.deleteMany({name: "Melek"})
        

    // 9 )              // Query Helpers
         //--------------------------------------------

     // const person = await Person
     // .where("favoriteFoods").equals("burritos")
     // .limit(2)
     // .sort({ name: 1 })
     // .select({ age: 0 })
     // .exec()

    } 

    catch(e){ 

        console.log(e.message)
    }
}





