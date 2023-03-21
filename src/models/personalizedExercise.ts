import e from "express";
import { Exercise } from "./exercise"

export class PersonalizatedExercise{
    private exercise: Exercise | undefined;
    private series: number;
    private reps: number;

    constructor(exercise: Exercise | undefined, series: number,reps: number){
        this.exercise = exercise;
        this.series = series;
        this.reps = reps;
    }
}