import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../model/auth.model';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form!: FormGroup;
  user: IUser | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const a =
        JSON.parse(localStorage.getItem('contact' + this.user?.id)!) || [];
      const ifCheckout = this.form.value;
      ifCheckout.id = a.length
        ? Math.max(...a.map((x: { id: number }) => x.id)) + 1
        : 1;
      a.push(ifCheckout);
      localStorage.setItem('contact' + this.user?.id, JSON.stringify(a));
      this.router.navigate(['/home']);
      this.toastrService.success('Post Successful', 'Success!');
    } else {
      this.form.markAllAsTouched();
      this.toastrService.warning('No Title in here', 'Error!');
    }
  }
}
