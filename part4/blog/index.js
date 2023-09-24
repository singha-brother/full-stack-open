const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port http://127.0.0.1:${PORT}`);
});
