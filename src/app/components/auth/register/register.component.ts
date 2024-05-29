import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      this.toastr.success('Usuario registrado exitosamente', '¡Registro Exitoso!');
      this.router.navigate(['/home']);
    } else{
      this.toastr.error('Error al registrar el usuario', '¡Error!');
    }
  }
}
