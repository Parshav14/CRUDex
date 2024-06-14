const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json()); 


mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});


const itemSchema = new mongoose.Schema({
  name: String, 
  description: String, 
});


const Item = mongoose.model("Item", itemSchema);


app.get("/api/items", async (req, res) => {
  const items = await Item.find(); 
  res.json(items); 
});


app.post("/api/items", async (req, res) => {
  const newItem = new Item(req.body); 
  await newItem.save();
  res.json(newItem); 
});


app.put("/api/items/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedItem); 
});


app.delete("/api/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id); 
  res.json({ message: "Item deleted" });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
