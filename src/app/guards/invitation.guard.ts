import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitationGuard implements CanActivate {
  constructor(private route: ActivatedRoute){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.route.queryParams.pipe(
        map(x => {
          console.log(x);
        })
      )
    return this.route.queryParams.pipe(
      map(x => {
        console.log(this.route.url);
        console.log(x);
        return true;
      })
    );
  }
  
}
