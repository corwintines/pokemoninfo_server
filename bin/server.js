const app = require('../src/app')

const BOOB = process.env.port || '8008'
app.listen(BOOB)

console.log(`Please show me your ${BOOB}IE`)