import { ObjectId } from "mongoose";

export class Activity {
    public name: string;
    public description: string;
    public numHours: number;
    public numMinutes: number;
    
    constructor(name: string, description: string, numHours: number, numMinutes: number) {
        this.name = name;
        this.description = description;
        this.numHours = numHours;
        this.numMinutes = numMinutes;
    }
}