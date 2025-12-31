import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGuard implements CanLoad {
  constructor(
    private readonly auth: AuthStore,
    private readonly router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}
