export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface IUser {
  name: string;
  lname: string;
  age: number;
  accept: string;
  family: {
    father: string;
    mother: string;
  };
}

export interface IErrormessages {
  errorMessages: Function;
}
