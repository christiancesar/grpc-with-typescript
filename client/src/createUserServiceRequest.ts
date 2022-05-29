import { User, UserRequest } from "../../proto/user_pb"
import { usersClient } from "./usersClient"

// Normal Implementation Example
export const createUserServiceRequest = () => {
  usersClient.createUser(
    new UserRequest().setUser(
      new User()
        .setFirstname('Michelle')
        .setLastname("T. Freires")
        .setAge(20)
        .setEmail('michelletf@gmail.com')
        .setBirthday('2021-08-14')
    ), (err, note) => {
      if (err) return console.log(err.message)
      console.log(note.toObject())
    }
  )

  usersClient.createUser(
    new UserRequest().setUser(
      new User()
        .setFirstname('Christian Cesar')
        .setLastname("Rodrigues")
        .setAge(24)
        .setEmail('christiancnp@gmail.com')
        .setBirthday('1997-11-01')
    ), (err, note) => {
      if (err) return console.log(err.message)
      console.log(note.toObject())
    }
  )
}

// Promise Implementation Example

  // export const createUserServiceRequest = (userRequest: ICreateUser) => new Promise<UserResponse>((resolve, reject) => {
  //   usersClient.createUser(
  //     new UserRequest().setUser(
  //       new User()
  //         .setFirstname(userRequest.firstName)
  //         .setLastname(userRequest.lastName)
  //         .setAge(userRequest.age)
  //         .setEmail(userRequest.email)
  //         .setBirthday(userRequest.birthday)
  //     ), (err, user) => {
  //       if (err) {
  //         reject(err)
  //       }
  //       resolve(user)
  //     }
  //   )
  // })