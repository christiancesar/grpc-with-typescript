import { ChannelCredentials } from '@grpc/grpc-js'
import { UsersClient } from '../../proto/user_grpc_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';

const client = new UsersClient('0.0.0.0:50052', ChannelCredentials.createInsecure())

client.listUsers(new Empty(), (err, notes) => {
  if (err) return console.log(err)
  console.log(notes.toObject())
})
