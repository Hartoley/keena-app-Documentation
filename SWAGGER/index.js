const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const userDocs = YAML.load("./SWAGGER/api.yaml");

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(userDocs));

// app.use("/admin-api-docs", swaggerUI.serve, swaggerUI.setup(adminDocs));

app.listen(4000, () => console.log("Up & Running on port 4000"));
