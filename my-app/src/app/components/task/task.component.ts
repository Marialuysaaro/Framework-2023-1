import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent {
  nome = new FormControl('');
  descricao = new FormControl('');
  responsavel  = new FormControl('');
  dt_inicio  = new FormControl('');
  dt_fim  = new FormControl('');  

  tasks: Task[] = [];
  constructor(private router: Router, private taskService: TaskService){}

  addTask() {
    let t = this.dataToObject();
    this.taskService.tasks.push(t);

    this.limparForm();
    this.router.navigateByUrl('/dashboard');
  }
 //-----------------------------------------------------------------------------------------------------------------
  dataToObject(){
   let task = new Task(); // criar um objeto -  let=variavel 
   task.nome = this.nome.value!;
   task.descricao = this.descricao.value!;
   task.responsavel = this.responsavel.value!;
   task.dt_inicio = new Date(this.dt_inicio.value!);
   task.dt_fim = new Date(this.dt_fim.value!);

  return task;
  }

  limparForm(){
    this.nome.setValue('');
    this.descricao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
  }

}
