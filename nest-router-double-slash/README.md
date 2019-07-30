nest-router doesn't work as expected on root level route
=====

When I tried to apply nest-router in top level route, it gave me double slashes at the top instead of one.
e.g.) `//users` instead of `/users`

This repository reproduce its behaviour

Steps to reproduce
-----

```bash
$ yarn           # install dependencies
$ yarn start:dev # start run server; gets following output
yarn run v1.17.3
$ nodemon
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: /Users/takayukioda/github.com/takayukioda/reproduce-lab/nest-router-double-slash/src/**/*
[nodemon] starting `ts-node -r tsconfig-paths/register src/main.ts`
[Nest] 10057   - 07/30/2019, 11:44 PM   [NestFactory] Starting Nest application...
[Nest] 10057   - 07/30/2019, 11:44 PM   [InstanceLoader] AppModule dependencies initialized +14ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [InstanceLoader] RouterModule dependencies initialized +5ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [InstanceLoader] AdminUserModule dependencies initialized +1ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [RoutesResolver] UserController {//users}: +7ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [RoutesResolver] AdminUserController {/admin/users}: +0ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 10057   - 07/30/2019, 11:44 PM   [NestApplication] Nest application successfully started +3ms
```
