import { difficultyList, exerciseList  } from "../globalVariables";
import { Exercise } from "../models/exercise";
import { TypeOfDifficulty } from "../models/TypeOfDifficulty";
import { TypeOfTraining } from "../models/typeOfTraining";
import { Weight } from "../models/weight";
import { exerciseRepository } from "../repositories/exercise.repository";


export function getExercisesAccordingToTypeOfTraining(typeOfTraining: TypeOfTraining | undefined){
    return typeOfTraining ? exerciseRepository.getAll().filter(ex => ex.getTypesOfTraining().includes(typeOfTraining)) : undefined;
}

export function getMatrixAccordingToMuscles(muscles: string | any[],exercises: Exercise[] | undefined){
    let exerciseAuxMatrix = [];
    if(exercises){
        for(let i =0; i<muscles.length;i++){
            let exercisesAux = (exercises.filter(ex => ex.getMusclesInvolved().map(m => m.getName()).includes((muscles[i].name))));
            exerciseAuxMatrix.push(selectRandomExercises(exercisesAux));
        }
        return exerciseAuxMatrix;
    } 
    return [];
}


function selectRandomExercises(exercises: Exercise[]){
    // 5 ejercicios como minimo
    if(exercises.length < 5){
        return exercises;
    } else {
        let exercisesAux = [];
        let numbersSelected: number[] =[];
        for(let i =0;i<5;i++){
            let index = selectNumberDistinct(numbersSelected,exercises.length);
            numbersSelected.push(index ? index : 0);
            exercisesAux.push(exercises[index ? index : 0]);
        }
        return exercisesAux;
    }
}

function selectNumberDistinct(numbersSelected: number[], max: number): number{
    let numbAux =  Math.ceil(Math.random()*max - 1);
    if(numbersSelected.includes(numbAux)){
        return selectNumberDistinct(numbersSelected,max);
    } else {
        return numbAux;
    }
}

export function divideNumberIntoParts(num: number, elements: number): number[] {
    const initialValue = Math.floor(num / elements);
  
    const numberOfItemToFix = num % elements;
  
    const array: number[] = new Array(elements).fill(initialValue);
  
    for (let i = 0; i < numberOfItemToFix; i++) {
      array[i]++;
    }
  
    return array;
  }


export function selectExercises(exercisesMatrix: Exercise[][]){
    let exercises: Exercise[] = [];
    let exercisesPerMuscle = 3

    for(let i = 0 ; i< exercisesMatrix.length;i++){
        let exercisesAux = exercisesMatrix[i].slice(0,exercisesPerMuscle);
        exercisesAux.forEach(ex => exercises.push(ex));
    }
    return exercises;
}
