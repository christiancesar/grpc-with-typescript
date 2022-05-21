# gRPC with TypeScript
This project contain example that create microservice with gRPC + Typescript

## Packages 📦
- typescript
- @grpc/grpc-js
- google-protobuf
- grpc-tools
- grpc_tools_node_protoc_ts

## Important ⚠️
To develop with typescript it is necessary to install the packages below. Because these packages are responsible for compiling and generating types that proto files.

```bash
$ yarn add -D @types/long grpc_tools_node_protoc_ts grpc-tools
```

```javascript
//package.json

"scripts": {
    "compile": "grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./proto --grpc_out=grpc_js:./proto -I ./proto ./proto/*.proto && grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./proto -I ./proto ./proto/*.proto",
    "dev:server": "ts-node-dev --transpile-only --inspect --ignore-watch node_modules server/src/index.ts",
    "dev:client": "ts-node-dev --transpile-only --inspect --ignore-watch node_modules client/src/index.ts"
  }
```
## Inicialize 🔰

Install dependencies

```bash
$ yarn 
```

Up Server

```bash
$ yarn dev:server
```

Up Client

```bash
$ yarn dev:client
```

## References
[Lucas Santos - O guia completo do gRPC parte 3: Tipos em tudo com TypeScript!](https://blog.lsantos.dev/o-guia-do-grpc-3/)

Pure Js
https://grpc.io/docs/languages/node/quickstart/