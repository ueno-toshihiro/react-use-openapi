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
      mock: true,
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
};
