import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invitados } from 'src/app/const/invitados.interface';
import { INVITADOS } from '../../const/invitados.const'
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  public guest: Invitados;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(x => {
      if (x.i){
        const guest = INVITADOS.find(y =>
        y.nombre.replace(/\s/g, "") === x.i);
        if(guest) {
          this.guest = guest;
        } else {
          this.router.navigate(['/no-invitado'])
        }
      } else {
        this.router.navigate(['/no-invitado'])
      }
    })
  }

  ngOnInit(): void {
  }

}
