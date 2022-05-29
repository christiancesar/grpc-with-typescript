// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUsersService_IcreateUser;
    listUsers: IUsersService_IlistUsers;
    showUser: IUsersService_IshowUser;
}

interface IUsersService_IcreateUser extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserResponse> {
    path: "/user.Users/createUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUsersService_IlistUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, user_pb.UserResponse> {
    path: "/user.Users/listUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUsersService_IshowUser extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserResponse> {
    path: "/user.Users/showUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserResponse>;
    listUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, user_pb.UserResponse>;
    showUser: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserResponse>;
}

export interface IUsersClient {
    createUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    showUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    showUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    showUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public showUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public showUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public showUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
