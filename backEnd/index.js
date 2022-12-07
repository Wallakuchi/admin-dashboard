const express = require("express");
const app = express();
app.use(express.json());
const Database = require("./mongodb");

const cors = require("cors");
app.use(cors());
const PORT = 4500;

const DB_NAME = "admindata";
const USER_TBL = "users";
const url = `mongodb://localhost:27017/${DB_NAME}`;

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/login", async (req, res) => {
  const reqData = req.body;
  console.log(reqData);

  const db = new Database();
  await db.connect(url, DB_NAME);

  const tbl = await db.selectTable(USER_TBL);
//   console.log(tbl);

//------------------------------------------------------
  const checkUser = await tbl.findOne();
  console.log(checkUser);

//If userdata doesn't exist
//-----------------------------------------------------------
  if (!checkUser) {
    const payload = {
      name: "Santosh",
      username: "admin",
      password: "12345",
    };

    await db.insertOne(tbl, payload);

    const data = await db.selectOne(tbl, {
      username: payload.username,
      password: payload.password,
    });

    console.log(data);

    if (data && data._id) {
      db.disconnect();
      res.json({ data, message: "Login successfully", status: 1 });
      return;
    }
    res.json({ message: "Invalid username or password", status: 0 });
  } 
  
//If userdata exist
//-----------------------------------------------------------
  else {
    const data = await db.selectOne(tbl, {
      username: reqData.username,
      password: reqData.password,
    });

    console.log(data);

    if (data && data._id) {
      db.disconnect();
      res.json({ data, message: "Login successfully", status: 1 });
      return;
    }
    res.json({ message: "Invalid username or password", status: 0 });
  }
});

app.listen(PORT, () => {
  console.log(`API is working at ${PORT}`);
});
