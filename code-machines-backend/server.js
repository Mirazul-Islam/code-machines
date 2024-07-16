const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');
const User = require('./models/user');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});




// app.get('/api/example', (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
// });


  // Get all users
//   router.get('/users', async (req, res) => {
//     try {
//       const users = await User.find({});
//       res.send(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   });
  
//   // Update a user
//   router.put('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { username, password } = req.body;
  
//     try {
//       const user = await User.findByIdAndUpdate(id, { username, password }, { new: true });
//       res.send(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   });
  
//   // Delete a user
//   router.delete('/users/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const user = await User.findByIdAndDelete(id);
//       res.send(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   });

// module.exports = router;
