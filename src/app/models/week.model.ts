import { ObjectId } from "mongoose";
import { Activity } from "./activity.model";

export class Week {
    // public _id: ObjectId;
    public id: string;
    public name: string;
    public totalHours: number;
    public totalMinutes: number;
    public activities: Activity[]|any;
    
    constructor(id: string, name: string, totalHours: number, totalMinutes: number, activities: Activity[]|any) {
        this.id = id;
        this.name = name;
        this.totalHours = totalHours;
        this.totalMinutes = totalMinutes;
        this.activities = activities;
    }
}