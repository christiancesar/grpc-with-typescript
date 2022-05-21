import { Server, ServerCredentials } from "@grpc/grpc-js";
import { promisify } from "util";
import { UsersService } from "../../proto/user_grpc_pb";
import UsersServer from "./User.services";


const server = new Server()
server.addService(UsersService, new UsersServer())

const bindPromise = promisify(server.bindAsync).bind(server)

bindPromise('0.0.0.0:50052', ServerCredentials.createInsecure())
  .then((port) => {
    console.log(`listening on ${port}`)
    server.start()
  })
  .catch(console.error)