
var path = require("path");
const db = require("../models");

module.exports = function(app) {

  //getting the exercises and stats for dashboard
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });


//getting the workouts to display
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

       app.put("/api/workouts/:id", function(req, res) {
        db.Workout.findByIdAndUpdate({_id: req.params.id} ,
           { $push: {exercises: req.body}},
           {new: true}
        ).then(function(dbWorkouts) {
          console.log('dbWorkouts', dbWorkouts)
          res.json(dbWorkouts);
        });
      }); 
      

      app.post("/api/workouts", function(req, res) {
        db.Workout.create({}).then(function(dbWorkouts) {
          console.log('dbWorkouts', dbWorkouts) 
          res.json(dbWorkouts);
        }); 
          
      });
}