import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterEach(() => app.close());

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(20);
      });
  });

  it('/users (GET) with page', () => {
    return request(app.getHttpServer())
      .get('/users')
      .query({ page: 3 })
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(20);
      });
  });

  it('/users (GET) with perPage', () => {
    return request(app.getHttpServer())
      .get('/users')
      .query({ page: 6, perPage: 40 })
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(40);
      });
  });
});
