import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../Services/usuarios.service";

@Component({
  selector: 'app-toppacks',
  templateUrl: './toppacks.component.html',
  styleUrls: ['./toppacks.component.css']
})
export class ToppacksComponent implements OnInit {

  packs: any[] = [];

  constructor(public usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  check_packs(): boolean{
    if(this.packs.length != 0){
      return true;
    }
    else{
      return false;
    }
  }

  async get_top(): Promise<void>{
    await this.usuarioService.get_top()
      .then((res: any) => {
        this.packs = res;
        console.log(this.packs);
      })
      .catch(err => console.error(err));
  }
}
