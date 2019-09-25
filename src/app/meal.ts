export class Meal {
    showEdit:boolean;
    showDescription: boolean;
    constructor(public id: number, public food: string, public description: string, public mealDate: Date, public calories: string){
        this.showDescription=false;
        this.showEdit=false;
    }
}
