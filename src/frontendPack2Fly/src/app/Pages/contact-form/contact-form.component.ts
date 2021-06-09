import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../Services/usuarios.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactForm: FormGroup;

  from: FormControl;
  title: FormControl;
  message: FormControl;

  constructor(public usuarioService: UsuariosService,private fb: FormBuilder) {
    this.from = new FormControl('', [Validators.required])
    this.title = new FormControl('', [Validators.required])
    this.message = new FormControl('', [Validators.required])

    this.ContactForm = this.fb.group({
      from: this.from,
      title: this.title,
      message: this.message
    })
  }

  ngOnInit(): void {
  }

  async sendEmail():  Promise<void>{
    await this.usuarioService.send_gmail(this.ContactForm.get('from')?.value,this.ContactForm.get('title')?.value,this.ContactForm.get('message')?.value)
    .then((res: any) => {
        console.log("Message send")
    })
      .catch(err => console.error(err));
  }

}
