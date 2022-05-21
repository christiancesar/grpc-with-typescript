import grpc, { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';
import { IUsersServer } from "../../proto/user_grpc_pb";
import { User as UserProto, UserResponse } from "../../proto/user_pb";
import User from "./User.entity";

const users: UserProto.AsObject[] = [
  new User({ email: 'christian.cesar@gmail.com', username: 'christiancesarr' }),
  new User({ email: 'maikon.bueno@gmail.com', username: 'maikonbueno' })
]


class UsersServer implements IUsersServer {
  [name: string]: grpc.UntypedHandleCall;

  listUsers(_: ServerUnaryCall<Empty, UserResponse>, callback: sendUnaryData<UserResponse>): void {
    const response = new UserResponse();
    users.forEach((user: User) => {
      response.addUser(
        (new UserProto).setId(user.id).setUsername(user.username).setEmail(user.username)
      )
    })
    callback(null, response);
  }

}

export default UsersServer