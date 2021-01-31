import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../../src/app.module';

describe('CustomerController (e2e)', () => {
  let app: INestApplication;

  afterEach(() => app.close());
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/customers (GET)', () => {
    return request(app.getHttpServer())
      .get('/customers')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(20);
      });
  });

  it('/customers (GET) with page', () => {
    return request(app.getHttpServer())
      .get('/customers')
      .query({ page: 3 })
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(20);
      });
  });

  it('/customers (GET) with perPage', () => {
    return request(app.getHttpServer())
      .get('/customers')
      .query({ page: 6, perPage: 40 })
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(40);
      });
  });
});
