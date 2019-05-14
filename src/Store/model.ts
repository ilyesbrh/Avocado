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
    state:string,
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

export enum affairTypes {
    type1 = 1,
    type2 = 2,
    type3 = 3,
    type4 = 4,
    type5 = 5,
    type6 = 6,
    type7 = 7,
    type8 = 8,
    type9 = 9,
    type10 = 10,
  };
  
export function VoidAffairBuilder():affair {
    return {id:null,number:null,type:null,favorite:false,name:'',
    court:'',creationDate:null ,modificationDate:null,
    audienceDate:null,cost:null,debt:null,payment:null,description:'',state:'current'};
}  
