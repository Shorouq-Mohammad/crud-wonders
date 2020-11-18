const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true },
  ];
  
  router.get("/wonders", function (req, res) {
    res.send(wonders);
  });
  
  router.post("/wonder", function (req, res) {
    wonders.push({
      name: req.body.name,
      location: req.body.location,
      visited: false,
    });
    console.log(req.body);
    console.log(wonders);
    console.log("Someone's trying to make a post request");
    res.end();
  });
  
  router.put("/wonder/:name", function (req, res) {
    let wonder = req.params.name;
    wonders.find((w) => w.name === wonder).visited = true;
    res.end();
  });
  
  router.delete("/wonder/:name", function(req,res){
      const name = req.params.name
      const i = wonders.findIndex(w => w.name === name)
      wonders.splice(i, 1)
      console.log(wonders)
      res.end()
  })
  module.exports = router
