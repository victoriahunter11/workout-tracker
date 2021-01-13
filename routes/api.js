
var path = require("path");
const db = require("../models");

module.exports = function(app) {

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

      app.get("/api/workouts", function(req, res) {
        db.Workout.find().then(function(dbWorkouts) {
          console.log('dbWorkouts', dbWorkouts)
          res.json(dbWorkouts);
        });
      });

      app.get("/api/workouts/range", function(req, res) {
       // console.log('hitttt')
        db.Workout.find({}).then(function(dbWorkouts) {
          //console.log('dbWorkouts', dbWorkouts)
          res.json(dbWorkouts);
        });
      });




      app.post("/api/workouts", function(req, res) {
          
      })
}