import { ChannelCredentials } from "@grpc/grpc-js";
import { UsersClient } from "../../proto/user_grpc_pb";

export const usersClient = new UsersClient('0.0.0.0:50052', ChannelCredentials.createInsecure())