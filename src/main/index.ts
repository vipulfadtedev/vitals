import express from "express";

const app = express();
const port = process.env.PORT;

let count = 0;
app.get('/counter', (req, res) => {
count += 1;
res.send(count+'');
});

// only listen if ran locally...
if(process.env.NODE_ENV === 'development'){
app.listen(port, () => {
    // tslint:disable-next-line:no-console
  console.log(`Example app listening on port ${port}`);
});
}

// export 'app', this is requirement of deta...
module.exports = app;