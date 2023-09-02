import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AlertService } from '../../service/alert.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      checkBox: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      this.alertService.clear();
      this.authService
        .register(this.form.value)
        .pipe(first())
        .subscribe({
          next: () => {
            this.toastrService.success('Register Success!', 'Success!');
            this.router.navigate(['/signin'], { relativeTo: this.route });
          },
          error: () => {
            this.toastrService.error(
              'Username has been duplicated by another user !',
              'Error!'
            );
          },
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
