const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    // Simulate an error
    throw new Error('This is a simulated error');
    
    // Uncomment the line below to see how catch works with asynchronous code
    // setTimeout(() => { throw new Error('Simulated async error'); }, 1000);
    
    res.send('Hello, this is a simple Express app!');
  } catch (error) {
    // Handle the error using catch
    res.status(500).send(`An error occurred: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
