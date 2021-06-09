import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../Services/usuarios.service";

@Component({
  selector: 'app-recommendedpacks',
  templateUrl: './recommendedpacks.component.html',
  styleUrls: ['./recommendedpacks.component.css']
})
export class RecommendedpacksComponent implements OnInit {

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

  async get_recommended(): Promise<void>{
    await this.usuarioService.get_recommended()
      .then((res: any) => {
        this.packs = res;
        console.log(this.packs);
      })
      .catch(err => console.error(err));
  }
}

