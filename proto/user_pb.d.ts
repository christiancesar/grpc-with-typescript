// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getAge(): number;
    setAge(value: number): User;
    getBirthday(): string;
    setBirthday(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        email: string,
        firstname: string,
        lastname: string,
        age: number,
        birthday: string,
    }
}

export class UserResponse extends jspb.Message { 
    clearUserList(): void;
    getUserList(): Array<User>;
    setUserList(value: Array<User>): UserResponse;
    addUser(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        userList: Array<User.AsObject>,
    }
}

export class UserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}
