const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes

//add a patient
app.post("/clinicaldb",async(req,res)=>{
    try{
     
        const {patient_name,phone,token_num } = req.body;
        const newToken = await pool.query(
            "INSERT INTO info (patient_name,phone,token_num) VALUES($1, $2, $3) RETURNING *",
             [patient_name,phone,token_num]
          );
      
          res.json(newToken.rows[0])
    }
    catch(error){
       
        console.log(error.message);
    }
});

app.get("/clinicaldb", async (req, res) => {

    try {

     
      const allTokens = await pool.query("SELECT * FROM info");

      res.json(allTokens.rows);
    } 
    catch (err) {
      console.error(err.message);
    }
  });

//display all patients

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
