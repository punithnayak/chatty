const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000



app.get("/", (req, res) => { 
        res.send("Sex nahi mil raha");
});
app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
})