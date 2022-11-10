import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'todo-task';
  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    alert('task have been added');
  }
}
