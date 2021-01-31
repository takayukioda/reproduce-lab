# Nest E2E Memory Leak

Try reproduce memory leak on e2e test.

```shell
$ yarn test:e2e
yarn run v1.22.10
$ node --expose-gc ./node_modules/.bin/jest --config ./test/jest-e2e.json --runInBand --logHeapUsage
 PASS  test/copies/friend.e2e-spec.ts (87 MB heap size)
   PASS  test/copies/member.e2e-spec.ts (107 MB heap size)
   PASS  test/client.e2e-spec.ts (108 MB heap size)
   PASS  test/copies.7/client.e2e-spec.ts (108 MB heap size)
   PASS  test/copies.2/user.e2e-spec.ts (108 MB heap size)
   PASS  test/copies.2/friend.e2e-spec.ts (109 MB heap size)
   PASS  test/copies.5/customer.e2e-spec.ts (109 MB heap size)
   PASS  test/copies.6/member.e2e-spec.ts (109 MB heap size)
   PASS  test/copies.1/customer.e2e-spec.ts (110 MB heap size)
   PASS  test/copies/client.e2e-spec.ts (110 MB heap size)
   PASS  test/copies.5/client.e2e-spec.ts (110 MB heap size)
   PASS  test/copies.2/member.e2e-spec.ts (111 MB heap size)
   PASS  test/copies/user.e2e-spec.ts (111 MB heap size)
   PASS  test/copies.5/user.e2e-spec.ts (111 MB heap size)
   PASS  test/copies.8/friend.e2e-spec.ts (111 MB heap size)
   PASS  test/copies.2/customer.e2e-spec.ts (112 MB heap size)
   PASS  test/copies.4/user.e2e-spec.ts (112 MB heap size)
   PASS  test/copies.1/friend.e2e-spec.ts (112 MB heap size)
   PASS  test/copies.5/member.e2e-spec.ts (113 MB heap size)
   PASS  test/copies.3/client.e2e-spec.ts (113 MB heap size)
   PASS  test/copies.2/client.e2e-spec.ts (113 MB heap size)
   PASS  test/member.e2e-spec.ts (114 MB heap size)
   PASS  test/copies.4/member.e2e-spec.ts (114 MB heap size)
   PASS  test/copies.7/customer.e2e-spec.ts (114 MB heap size)
   PASS  test/copies.9/friend.e2e-spec.ts (132 MB heap size)
   PASS  test/copies.9/member.e2e-spec.ts (115 MB heap size)
   PASS  test/copies.4/client.e2e-spec.ts (115 MB heap size)
   PASS  test/copies.6/user.e2e-spec.ts (116 MB heap size)
   PASS  test/copies.3/member.e2e-spec.ts (116 MB heap size)
   PASS  test/copies.7/friend.e2e-spec.ts (116 MB heap size)
   PASS  test/copies.7/user.e2e-spec.ts (117 MB heap size)
   PASS  test/copies.3/friend.e2e-spec.ts (117 MB heap size)
   PASS  test/friend.e2e-spec.ts (117 MB heap size)
   PASS  test/copies.8/user.e2e-spec.ts (117 MB heap size)
   PASS  test/copies.1/user.e2e-spec.ts (118 MB heap size)
   PASS  test/copies.9/user.e2e-spec.ts (118 MB heap size)
   PASS  test/customer.e2e-spec.ts (118 MB heap size)
   PASS  test/copies.7/member.e2e-spec.ts (119 MB heap size)
   PASS  test/copies.4/friend.e2e-spec.ts (119 MB heap size)
   PASS  test/copies/customer.e2e-spec.ts (119 MB heap size)
   PASS  test/copies.9/client.e2e-spec.ts (120 MB heap size)
   PASS  test/copies.3/user.e2e-spec.ts (120 MB heap size)
   PASS  test/copies.8/member.e2e-spec.ts (120 MB heap size)
   PASS  test/copies.4/customer.e2e-spec.ts (138 MB heap size)
   PASS  test/copies.6/friend.e2e-spec.ts (121 MB heap size)
   PASS  test/copies.9/customer.e2e-spec.ts (121 MB heap size)
   PASS  test/copies.4/app.e2e-spec.ts (121 MB heap size)
   PASS  test/copies.8/customer.e2e-spec.ts (122 MB heap size)
   PASS  test/copies.1/client.e2e-spec.ts (122 MB heap size)
   PASS  test/copies.3/customer.e2e-spec.ts (122 MB heap size)
   PASS  test/copies.5/friend.e2e-spec.ts (123 MB heap size)
   PASS  test/copies.6/client.e2e-spec.ts (123 MB heap size)
   PASS  test/copies.8/app.e2e-spec.ts (123 MB heap size)
   PASS  test/copies.3/app.e2e-spec.ts (123 MB heap size)
   PASS  test/copies.1/app.e2e-spec.ts (140 MB heap size)
   PASS  test/copies.8/client.e2e-spec.ts (124 MB heap size)
   PASS  test/user.e2e-spec.ts (124 MB heap size)
   PASS  test/copies.1/member.e2e-spec.ts (125 MB heap size)
   PASS  test/copies.2/app.e2e-spec.ts (125 MB heap size)
   PASS  test/copies.6/customer.e2e-spec.ts (125 MB heap size)
   PASS  test/app.e2e-spec.ts (125 MB heap size)
   PASS  test/copies.6/app.e2e-spec.ts (126 MB heap size)
   PASS  test/copies.9/app.e2e-spec.ts (126 MB heap size)
   PASS  test/copies.7/app.e2e-spec.ts (126 MB heap size)
   PASS  test/copies.5/app.e2e-spec.ts (127 MB heap size)
   PASS  test/copies/app.e2e-spec.ts (127 MB heap size)

  Test Suites: 66 passed, 66 total
  Tests:       176 passed, 176 total
  Snapshots:   0 total
  Time:        30.859 s, estimated 32 s
  Ran all test suites.
  ✨  Done in 32.22s.
```
