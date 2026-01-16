process.loadEnvFile(".env");

import env from "../.env.js";

const Env = {
    dburl : env.DB_URL,
    portnumber : env.PORT_NUMBER
}

export default Env;
