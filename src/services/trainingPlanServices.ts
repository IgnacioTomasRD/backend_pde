
// days: "2"
// difficulty: "FACIL"
// duration: "2"
// muscles: {name: 'Pierna', subMuscles: Array(0)}{name: 'Abdomen', subMuscles: Array(0)}{name: 'Espalda', subMuscles: Array(0)}
// typeOfTraining: "FUERZA"

import { difficultyList, exerciseList } from "../globalVariables";
import { TypeOfDifficulty } from "../models/TypeOfDifficulty";
import { Exercise } from "../models/exercise";
import { PersonalizatedExercise } from "../models/personalizedExercise";
import { Training } from "../models/training";
import { TypeOfTraining } from "../models/typeOfTraining";
import { ConverterBody } from "../utils/ConverterBody";
import { Difficulty } from "../models/difficulty";
import { Weight } from "../models/weight";

function generateTrainingPlan(body: any){
    let muscles = body.muscles;
    let typeOfTraining: TypeOfTraining | undefined = ConverterBody.toTypeOfTraining(body);
    let days = parseInt(body.days);
    let duration = parseInt(body.duration);
    let typeOfDifficulty: TypeOfDifficulty | undefined= ConverterBody.toTypeOfDifficulty(body);
    let weight;
    if(typeOfTraining === TypeOfTraining.FUERZA){
        weight = Weight.PESADO
    } else{
        weight = ConverterBody.toWeight(body);
    }
     
    let difficulty = getDifficulty(typeOfDifficulty,weight);

    let object: Object ={
        muscles,
        typeOfDifficulty,
        typeOfTraining,
        days,
        duration,
        weight,
        difficulty
    }

    console.log(object);

    let numberOfWorkouts = duration * 4 * days; // 4 weeks per month
    
    let exercises = getExercisesAccordingToTypeOfTraining(typeOfTraining);
    let exercisesMatrix = getMatrixAccordingToMuscles(muscles,exercises);
    console.log("-------------------------------------------");

    let trainings = [];

    for(let i = 0;i<numberOfWorkouts; i++){
        let aux = i % muscles.length;
        trainings.push(new Training(i,"Entrenamiento "+ (i+1),
            exercisesMatrix[aux].map(ex => new PersonalizatedExercise(ex,difficulty ? difficulty.getSeries(): 0 ,difficulty? difficulty.getReps() : 0)),[muscles[aux]]));
    }
    console.log(trainings);
    return({...object, trainings});
}

function getDifficulty(typeOfDifficulty: TypeOfDifficulty | undefined, weight: Weight | undefined){
    return difficultyList.find(dif => dif.getTypeOfDifficulty() === typeOfDifficulty && dif.getWeight() === weight);
}


function getExercisesAccordingToTypeOfTraining(typeOfTraining: TypeOfTraining | undefined){
    return typeOfTraining ? exerciseList.filter(ex => ex.getTypesOfTraining().includes(typeOfTraining)) : undefined;
}

function getMatrixAccordingToMuscles(muscles: string | any[],exercises: Exercise[] | undefined){
    let exerciseAuxMatrix = [];
    if(exercises){
        for(let i =0; i<muscles.length;i++){
            let exercisesAux = (exercises.filter(ex => ex.getMusclesInvolved().map(m => m.getName()).includes((muscles[i].name))));
            exerciseAuxMatrix.push(selectExercisesRandom(exercisesAux));
        }
        return exerciseAuxMatrix;
    } 
    return [];
}

function selectExercisesRandom(exercises: Exercise[]){
    if(exercises.length < 5){
        return exercises;
    } else {
        let exercisesAux = [];
        let numbersSelected: number[] =[];
        for(let i =0;i<5;i++){
            let index = selectNumberDistinct(numbersSelected,exercises.length);
            exercisesAux.push(exercises[index ? index : 0]);
        }
        return exercisesAux;
    }
}

function selectNumberDistinct(numbersSelected: number[], max: number){
    let numbAux =  Math.ceil(Math.random()*max - 1);
    if(numbersSelected.includes(numbAux)){
        selectNumberDistinct(numbersSelected,max);
    } else {
        return numbAux;
    }
}

export default generateTrainingPlan;