import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  imports: [NgFor, NgIf]
})
export class LessonsListComponent implements OnInit {

  lessons: LessonSummary[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.lessons = this.route.snapshot.data["lessons"];

  }

}
