"addSelect" creates duplicated select query when using table alias
=====

When I was trying hidden column feature, I found that typeorm generates duplicated query for column.

This project reproduce its behaviour.

Steps to reproduce
-----

```shell
$ docker-compose up -d
$ yarn # (or npm install)
$ yarn start # (or npm run start)
# ...some migration queries
----- add select without table alias without hidden column -----
query: SELECT "User"."id" AS "User_id", "User"."name" AS "User_name" FROM "user" "User"
----- add select without table alias without column alias -----
query: SELECT "User"."id" AS "User_id", "User"."name" AS "User_name", password FROM "user" "User"
----- add select without table alias with column alias -----
query: SELECT "User"."id" AS "User_id", "User"."name" AS "User_name", password AS "password_alias" FROM "user" "User"
===== add select with table alias without hidden column =====
query: SELECT "u"."id" AS "u_id", "u"."name" AS "u_name" FROM "user" "u"
===== add select with table alias without column alias =====
query: SELECT "u"."id" AS "u_id", "u"."name" AS "u_name", "u"."password" AS "u_password", "u"."password" FROM "user" "u"
===== add select with table alias with column alias =====
query: SELECT "u"."id" AS "u_id", "u"."name" AS "u_name", "u"."password" AS "password_alias", "u"."password" AS "password_alias" FROM "user" "u"
```
