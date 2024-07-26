const { faker } = require("@faker-js/faker");

// モックのUser更新データ作成
export const getUpdateUserByIdRequestMock = (id: string) => ({
  id,
  name: faker.person.fullName(),
  email: faker.internet.email(),
});
