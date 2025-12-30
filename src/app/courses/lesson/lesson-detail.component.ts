import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { SharedModule } from '../../shared/shared.module';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
  imports: [SharedModule, NgIf, MatIconModule, RouterLink, AsyncPipe]
})
export class LessonDetailComponent implements OnInit {

  lesson$: Observable<LessonDetail>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    // this.lesson = this.route.snapshot.data['lesson'];
    this.lesson$ = this.route.data.pipe(
      map((data) => data['lesson'])
    );
  }


  previuos(lesson: LessonDetail) {
    this.router.navigate(
      ['lessons', lesson.seqNo - 1],
      { relativeTo: this.route.parent }
    );
  }

  next(lesson: LessonDetail) {
    this.router.navigate(
      ['lessons', lesson.seqNo + 1],
      { relativeTo: this.route.parent }
    );
  }
}
