import { createUserServiceRequest } from './createUserServiceRequest';
import { ICreateUser } from './ICreateUser.dto';



const user = {
  firstName: "Christian Cesar",
  lastName: "Rodrigues",
  age: 24,
  birthday: "1997-11-01",
  email: "christiancnp@gmail.com"

} as ICreateUser;

(async () => {
  
  /* -------------------------------------Create User------------------------------- */  
  //Create User Normal
  createUserServiceRequest()
  
  //Create User With Promise  
  
  // await createUserServiceRequest(user)
  // .then((users: UserResponse) => {
  //   console.log(users)
  // })
  // .catch((error: ServiceError) => {
  //   console.error(error)
  // })

  /* -------------------------------------List User------------------------------- */ 

  // client.listUsers(new Empty(), (err, notes) => {
  //   if (err) return console.log(err)
  //   console.log(notes.toObject())
  // })
  
/* -------------------------------------Show User------------------------------- */ 
  // client.showUser(
  //   new UserRequest().setUser(
  //     new User().setId('628d98d3a39fecb973080353')
  //   ), (err, note) => {
  //     if (err) return console.log(err.message)
  //     console.log(note.toObject())
  //   })

})()