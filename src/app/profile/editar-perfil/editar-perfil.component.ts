import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { LoggedUser } from 'src/app/shared/authentication/logged-user.types';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  public usuarioLogado?: LoggedUser | null;
  public form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private servicoAutenticacao: AuthenticationService
  ) {
    this.usuarioLogado = this.servicoAutenticacao.getLoggedUser()

    this.form = this.fb.group({
      file: [null],
      nome: [this.usuarioLogado?.nome, [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  public obterReferenciaInput(nomeInput: string): AbstractControl {
    return this.form.controls[nomeInput]
  }

  public voltarParaHome() {
    this.router.navigateByUrl('/')
  }

  public async atualizarPerfil(): Promise<void> {
    console.log('editar Perfil')
  }

  public limparInputNome(){
    this.obterReferenciaInput('nome').setValue('')
  }

}
