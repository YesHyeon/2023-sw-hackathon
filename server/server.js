require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const logger = require("./config/logger");

const morganMiddleware = require("./utils/middleware/morgan");
const credentials = require("./utils/middleware/credentials");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(morganMiddleware);

app.use("/api/crawling", require("./routes/crawling"));

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
