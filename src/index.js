const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () =>
    // console.log('API Server listening on port http://localhost:' + port + '/test')
    console.log(`API Server listening on port http://localhost:${port}/test`)
);