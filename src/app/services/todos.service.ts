import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl : string =" http://localhost:3000/todos";

  constructor(private _HttpClient: HttpClient) { }

  getTodos()
  {
    return this._HttpClient.get(this.baseUrl);
  }


  saveTodo(todo : Todo)
  {
    return this._HttpClient.post(this.baseUrl, todo);
  }
}
