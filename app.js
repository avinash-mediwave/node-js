const express = require("express");
const app = express();

import { router } from ".routes/index.js";

app.use("/", router);

app.listen(3052);
