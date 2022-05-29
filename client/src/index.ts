import { ChannelCredentials, ServiceError } from '@grpc/grpc-js'
import { UsersClient } from '../../proto/user_grpc_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';
import { UserRequest, User, UserResponse } from '../../proto/user_pb';

interface ICreateUser {
  firstName: string;
  lastName: string;
  age: number;
  birthday: string;
  email: string;
}

const user = {
  firstName: "Christian Cesar",
  lastName: "Rodrigues",
  age: 24,
  birthday: "1997-11-01",
  email: "christiancnp@gmail.com"

} as ICreateUser;

(async () => {
  const client = new UsersClient('0.0.0.0:50052', ChannelCredentials.createInsecure())

  // client.listUsers(new Empty(), (err, notes) => {
  //   if (err) return console.log(err)
  //   console.log(notes.toObject())
  // })

  // client.createUser(
  //   new UserRequest().setUser(
  //     new User()
  //       .setFirstname('Christian Cesar')
  //       .setLastname("Rodrigues")
  //       .setAge(24)
  //       .setEmail('christiancnp@gmail.com')
  //       .setBirthday('1997-11-01')
  //   ), (err, note) => {
  //     if (err) return console.log(err.message)
  //     console.log(note.toObject())
  //   }
  // )

  const userServiceRequest = (userRequest: ICreateUser) => new Promise<UserResponse>((resolve, reject) => {
    client.createUser(
      new UserRequest().setUser(
        new User()
          .setFirstname(userRequest.firstName)
          .setLastname(userRequest.lastName)
          .setAge(userRequest.age)
          .setEmail(userRequest.email)
          .setBirthday(userRequest.birthday)
      ), (err, user) => {
        if (err) {
          reject(err)
        }
        resolve(user)
      }
    )
  })

  await userServiceRequest(user).then((users: UserResponse) => {
    console.log(users)
  })
  .catch((error: ServiceError) => {
    console.error(error)
  })


  // client.createUser(
  //   new UserRequest().setUser(
  //     new User()
  //       .setFirstname('Michelle')
  //       .setLastname("T. Freires")
  //       .setAge(20)
  //       .setEmail('michelletf@gmail.com')
  //       .setBirthday('2021-08-14')
  //   ), (err, note) => {
  //     if (err) return console.log(err.message)
  //     console.log(note.toObject())
  //   }
  // )

  // client.showUser(
  //   new UserRequest().setUser(
  //     new User().setId('628d98d3a39fecb973080353')
  //   ), (err, note) => {
  //     if (err) return console.log(err.message)
  //     console.log(note.toObject())
  //   })

})()