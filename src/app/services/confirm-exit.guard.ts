import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
  canDeactivate(
    component: CourseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentstate: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return component.confirmExit();
  }
}
