require("dotenv").config();

const fs = require("fs");
const express = require("express");
const knex = require("knex");
const app = express();
const port = 3001;


app.use(express.json());

const config = require("./knexfile.js")[process.env.NODE_ENV];
const database = knex(config);

app.get("/emails", async (req, res) => res.json(await database.from("emails").select("*")));
app.get("/emails/:id", async (req, res) => res.json(await database.from("emails").select("*").where("id", "=", Number(req.params.id))));

app.get("/search", async (req, res) => {
    const query = decodeURIComponent(req.query.query);

    const filteredEmails = await database.from("emails").select("*");
    res.json(filteredEmails.filter(email => email.subject.includes(query)));
});

app.post("/send", async (req, res) => {
    let result;
    const email = req.body;
    if(email.sender && email.recipient && email.subject && email.message) {
        await database.into("emails").insert({
            sender: email.sender,
            recipient: email.recipient,
            subject: email.subject,
            message: email.message
        });

        result = {
            "status": "success",
            "message": "The message was successfully sent"
        };
    }
    else {
        result = {
            "status": "failed",
            "message": "The message was not sent"
        };
        res.status(400);
    }

    res.json(result);
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
