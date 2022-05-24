export class User {
    public gold: number;
    public silver: number;
    public copper: number;

    public constructor() {
        // TODO: Retrieve this from somewhere - If no user exists in db then generate first -> set
        this.gold = 0;
        this.silver = 0;
        this.copper = 0;
    }
}