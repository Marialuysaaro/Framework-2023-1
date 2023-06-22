import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  this.loadTasks();
  console.log(this.tasks)
  }
  loadTasks() {
    console.log('Carregar as taks');
    this.tasks = this.taskService.tasks;
  }


user = "Maria Luysa";
data = new Date();

constructor(private router: Router, private taskService: TaskService){}

tasks: Task[] = [];

addTask(){
  this.router.navigateByUrl('/task', {
    state: this.tasks,
  });
}
}
