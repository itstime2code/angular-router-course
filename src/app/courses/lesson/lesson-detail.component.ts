import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { SharedModule } from '../../shared/shared.module';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
  imports: [SharedModule, NgIf, MatIconModule]
})
export class LessonDetailComponent implements OnInit {

  lesson: LessonDetail;

  constructor(private route: ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson'];
  }

}
