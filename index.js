const app = require('./app');
const port = process.env.port ?? 3000

const main = async () => {
  
  const db = require('./db/client');
  await db.connectToMongoDB();
  
  app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  });

}

main();