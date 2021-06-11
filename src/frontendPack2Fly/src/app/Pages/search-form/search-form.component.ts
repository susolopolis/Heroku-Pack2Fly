import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../Services/usuarios.service";
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  Origin: FormControl;
  Destiny: FormControl;
  CheckIn: FormControl;
  Checkout: FormControl;
  people: FormControl;

  packs: any[] = [];
  SearchForm: FormGroup;

  see_info: boolean[] = [false];
  set_loading: boolean = false;

  constructor(public usuarioService: UsuariosService,private fb: FormBuilder) {
    this.Origin = new FormControl('', [Validators.required])
    this.Destiny = new FormControl('', [Validators.required])
    this.Checkout = new FormControl('', [Validators.required])
    this.CheckIn = new FormControl('', [Validators.required])
    this.people = new FormControl('', [Validators.required])

    this.SearchForm = this.fb.group({
      Origin: this.Origin,
      Destiny: this.Destiny,
      Checkout: this.Checkout,
      CheckIn: this.CheckIn,
      people: this.people
    })
  }

  ngOnInit(): void {
  }

  async getPacks(): Promise<void>{
   await this.usuarioService.get_packs(this.SearchForm.get('Origin')?.value,this.SearchForm.get('Destiny')?.value,this.SearchForm.get('Checkout')?.value, this.SearchForm.get('CheckIn')?.value, this.SearchForm.get('people')?.value)
     .then((res: any) => {
       this.packs = res;
       console.log(this.packs);
     })
     .catch(err => console.error(err));
  }

  check_packs(): boolean{
    if(this.packs.length != 0){
      return true;
    }
    else{
      return false;
    }
  }

  async save_pack(index: any){
    await this.usuarioService.save_pack(this.packs[index])
      .then((data) => {
        console.log(JSON.stringify(data));
      })
      .catch(err => alert(err));
  }



  seePackInfo(index: any): void{
    this.see_info[index]=true;
  }
  check_info(index: any): boolean{
    return this.see_info[index];
  }
  reset_info(index: any): void{
    this.see_info[index]=false;
  }

  initiate_loading() : void{
    this.set_loading=true;
  }

  get_loading() : boolean{
    return this.set_loading;
  }
  hide_loading() : void{
    this.set_loading=false;
  }

  sort_price(): void {
    this.packs.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  }

  sort_price_expensive(): void {
    this.packs.sort(function(a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
    });
  }

  sort_puntuation(): void {
    this.packs.sort(function(a, b) {
      return parseFloat(b.hotel.Star_rating) - parseFloat(a.hotel.Star_rating);
    });
  }

  sort_price_puntuation(): void {
    this.packs.sort(function(a, b) {
      let div1 = (a.hotel.Star_rating * a.hotel.Star_rating) / a.price;
      let div2 = (b.hotel.Star_rating * b.hotel.Star_rating) / b.price;
      return (div2) - (div1);
    });
  }

}
