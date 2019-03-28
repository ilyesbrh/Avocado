export interface user{
    id:number,
    username:string,
    password:string,
    privilege:string
}
export interface affair{
    id:number,
    number:number,
    type:string,
    favorite:boolean,
    name:string,
    court:string,
    creationDate:Date,
    modificationDate:Date,
    audienceDate:Date,
    cost:number,
    debt:number,
    payment:number,
    description:string
}