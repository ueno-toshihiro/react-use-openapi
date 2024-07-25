const { faker } = require("@faker-js/faker");

module.exports = {
  "users-store-file-transformer": {
    input: {
      target: "./schema/openapi.yml",
      validation: true,
    },
    output: {
      mode: "split",
      target: "./src/api/users.ts",
      schema: "./src/api/models",
      client: "react-query",
      httpClient: "fetch",
      baseUrl: "http://localhost:3000",
      mock: {
        type: 'msw',
        delay: 3000,
        required: true,
      },
      override: {
        operations: {
          listUsers: {
            mock: {
              data: () => {
                // ユーザーリストのデータを10件生成する
                return Array.from({length: 10}, () => {
                  return {
                    // ランダムにユーザー情報を生成する
                    id: faker.number.int({ min: 1, max: 99 }),
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                  };
                });
              },
            }
          }
        }
      }
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
};
