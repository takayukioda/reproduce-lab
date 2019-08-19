import { createConnection, Connection } from 'typeorm';
import { User } from './user.entity'

const main = async () => {
  const connection: Connection = await createConnection({
    host: 'localhost',
    port: 5432,
    database: 'typeorm',
    username: 'typeorm',
    password: 'typeorm',
    type: 'postgres',
    logging: true,
    entities: [`${__dirname}/**/*.entity.{ts,js}`],
    synchronize: true,
  });

  console.log('----- add select without table without hidden column -----');
  await connection.getRepository(User)
    .createQueryBuilder()
    .select()
    .getOne();

  console.log('----- add select without table alias without column alias -----');
  await connection.getRepository(User)
    .createQueryBuilder()
    .select()
    .addSelect('password')
    .getOne();

  console.log('----- add select without table alias with column alias -----');
  await connection.getRepository(User)
    .createQueryBuilder()
    .select()
    .addSelect('password', 'password_alias')
    .getOne();

  console.log('===== add select with table without hidden column =====');
  await connection.getRepository(User)
    .createQueryBuilder('u')
    .select()
    .getOne();

  console.log('===== add select with table alias without column alias =====');
  await connection.getRepository(User)
    .createQueryBuilder('u')
    .select()
    .addSelect('u.password')
    .getOne();


  console.log('===== add select with table alias with column alias =====');
  await connection.getRepository(User)
    .createQueryBuilder('u')
    .select()
    .addSelect('u.password', 'password_alias')
    .getOne();

  await connection.close();
}

main();
