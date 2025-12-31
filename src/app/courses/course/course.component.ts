import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  imports: [NgIf, RouterOutlet],
})
export class CourseComponent implements OnInit {
  course: Course;
  couponCode: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.couponCode = this.route.snapshot.queryParamMap.get("couponCode");
  }

  confirmExit() {
    return confirm(`Are you sure you want to exit ${this.course.description}?`);
  }
}
