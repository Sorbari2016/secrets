import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000; 

// Serve the static files
app.use(express.static("public"));


app.get("/", async (req, res) => {
  try {
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {secret: result.secret, user: result.username});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
