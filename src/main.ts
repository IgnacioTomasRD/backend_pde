import express from "express";
import { routerExercise } from "./routes/exercise.routes";
import { routerHome } from "./routes/index.routes";
import { routerMuscle } from "./routes/muscle.routes";
import { routerTraining } from "./routes/training.routes";
import { routerTrainingPlan } from "./routes/trainingPlan.routes";
import { routerTypesOfTraining } from "./routes/typesOfTraining.routes";
import { routerDifficulty } from "./routes/diffculty.routes";
import { routerWeight } from "./routes/weight.routes";

const cors = require("cors");

const app = express();
app.use(cors({origin: 'http://localhost:5173'}));

app.listen(3000, ()=> console.log("server listen on port 3000"));

app.use(express.json());

app.use(routerHome);
app.use(routerMuscle)
app.use(routerTrainingPlan);
app.use(routerExercise);
app.use(routerTraining);
app.use(routerDifficulty);
app.use(routerTypesOfTraining);
app.use(routerWeight);




