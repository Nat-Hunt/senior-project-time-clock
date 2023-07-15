import { ObjectId } from "mongoose";

export class Activity {
    // public _id: ObjectId;
    public id: string;
    public name: string;
    public description: string;
    public numHours: number;
    public numMinutes: number;
    public resource: string;
    public day: string;
    
    constructor(id: string, name: string, description: string, numHours: number, numMinutes: number, resource: string, day: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.numHours = numHours;
        this.numMinutes = numMinutes;
        this.resource = resource;
    }
}