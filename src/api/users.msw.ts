/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * User API
 * OpenAPI spec version: 1.0.0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  User
} from './users.schemas'

export const getListUsersResponseMock = () => ((() => {
                // ユーザーリストのデータを10件生成する
                return Array.from({length: 10}, () => {
                  return {
                    // ランダムにユーザー情報を生成する
                    id: faker.number.int({ min: 1, max: 99 }),
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                  };
                });
              })())

export const getCreateUserResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getShowUserByIdResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getUpdateUserByIdResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})


export const getListUsersMockHandler = (overrideResponse?: User[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User[]> | User[])) => {
  return http.get('*/users', async (info) => {await delay(3000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getListUsersResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreateUserMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<User> | User)) => {
  return http.post('*/users', async (info) => {await delay(3000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateUserResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getShowUserByIdMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User)) => {
  return http.get('*/users/:userId', async (info) => {await delay(3000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getShowUserByIdResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdateUserByIdMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<User> | User)) => {
  return http.put('*/users/:userId', async (info) => {await delay(3000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdateUserByIdResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeleteUserByIdMockHandler = () => {
  return http.delete('*/users/:userId', async () => {await delay(3000);
    return new HttpResponse(null,
      {
        status: 204,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getUserAPIMock = () => [
  getListUsersMockHandler(),
  getCreateUserMockHandler(),
  getShowUserByIdMockHandler(),
  getUpdateUserByIdMockHandler(),
  getDeleteUserByIdMockHandler()
]
