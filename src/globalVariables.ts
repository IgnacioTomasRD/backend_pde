
import { TypeOfDifficulty } from "./models/TypeOfDifficulty";
import { Exercise } from "./models/exercise";
import { Muscle } from "./models/muscle";
import { Training } from "./models/training";
import { TrainingPlan } from "./models/trainingPlan";
import { Difficulty } from "./models/difficulty";
import { Weight } from "./models/weight";
import { TypeOfTraining } from "./models/typeOfTraining";

export const trainingPlanList: TrainingPlan[] = [];

export const difficultyList: Difficulty[] = [
    new Difficulty(25,4,TypeOfDifficulty.FACIL,Weight.LIVIANO),
    new Difficulty(20,4,TypeOfDifficulty.FACIL,Weight.INTERMEDIO),
    new Difficulty(15,3,TypeOfDifficulty.FACIL,Weight.PESADO),
    new Difficulty(35,4,TypeOfDifficulty.INTERMEDIO,Weight.LIVIANO),
    new Difficulty(25,4,TypeOfDifficulty.INTERMEDIO,Weight.INTERMEDIO),
    new Difficulty(15,4,TypeOfDifficulty.INTERMEDIO,Weight.PESADO),
    new Difficulty(50,4,TypeOfDifficulty.DIFICIL,Weight.LIVIANO),
    new Difficulty(12,4,TypeOfDifficulty.DIFICIL,Weight.INTERMEDIO),
    new Difficulty(8,4,TypeOfDifficulty.DIFICIL,Weight.PESADO)
];

export const muscleList: Muscle[] = [
    new Muscle("Pecho", [],"foto_pecho.png"),   //0
    new Muscle("Hombros",[],"foto_hombro.jpg"), //1
    new Muscle("Pierna",[],"foto_pierna.jpg"),  //2
    new Muscle("Brazos",[],"foto_biceps.png"),  //3
    new Muscle("Abdomen",[],"foto_abs.jpg"),    //4
    new Muscle("Espalda",[],"foto_espalda.jpg") //5
];

export const exerciseList: Exercise[] = [
    new Exercise("Press Banca",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[0]],"3k1WyyqWk-s"),
    new Exercise("Press Inclinado",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[0]],"bUwTJh4PIMk"),
    new Exercise("Cruces en polea",[TypeOfTraining.HIPERTROFIA ],"",[muscleList[0]],"XnaMi2Gb_9Q"),
    new Exercise("Fondos",[TypeOfTraining.HIPERTROFIA ],"",[muscleList[0]],"NF_wvA7CHGQ"),
    new Exercise("Flexiones",[TypeOfTraining.HIPERTROFIA ],"",[muscleList[0]],"e_EKkqoHxns"),
    new Exercise("Flexiones diamante",[TypeOfTraining.HIPERTROFIA ],"",[muscleList[0]],"ITe43DiSvrE"),
    new Exercise("Press inclinado con mancuerna",[TypeOfTraining.HIPERTROFIA ],"",[muscleList[0]],"MkMf308jXww"),

    new Exercise("Sentadilla",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA,TypeOfTraining.CARDIOVASCULAR],"",[muscleList[2]],"qe-vI_JBtjM"),
    new Exercise("Prensa",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[2]],"D1FvjYNX9QI"),
    new Exercise("Estocadas",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.CARDIOVASCULAR],"",[muscleList[2]],"Xcfs_3DMKlc"),
    
    new Exercise("Press Militar",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[1]],"j_Buh54Sb-w"),
    new Exercise("Vuelos laterales",[TypeOfTraining.HIPERTROFIA],"",[muscleList[1]],"yUJN62SBW08"),
    new Exercise("Press Arnold",[TypeOfTraining.HIPERTROFIA],"",[muscleList[1]],"l5tNUbpusCA"),
    
    new Exercise("Dominadas",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[5]],"RjZOKbg-Viw"),
    new Exercise("Remo en polea",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[5]],"81dy09ap9tg"),
    new Exercise("Remo con barra",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[5]],"nQSi7XLixYU"),
    
    new Exercise("Rueda",[TypeOfTraining.HIPERTROFIA],"",[muscleList[4]],"0JzHapbZnfQ"),
    new Exercise("Cortos",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.CARDIOVASCULAR],"",[muscleList[4]],"Wjq0aNDJMiM"),
    new Exercise("Dragon flag",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[4]],"8d0sQcw9xik"),
    
    new Exercise("Curl de Biceps",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[3]],"MvELKGVXF40"),
    new Exercise("Triceps en polea",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[3]],"fx4X-IBYxVI"),
    new Exercise("Curl de Biceps con barra",[TypeOfTraining.HIPERTROFIA,TypeOfTraining.FUERZA],"",[muscleList[3]],"STq4k6wWrTY"),
];
export const trainingList: Training[] = []; 