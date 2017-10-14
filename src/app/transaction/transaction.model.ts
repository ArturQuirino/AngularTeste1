export class Transaction {
    public id: String;
    public value: number;
    public description: string;
    public date: Date;
    public tags: Array<String>;
    public accountId: number;
}