import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css'],
})
export class CreateNewPostComponent {
  form!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      product: ['', Validators.required],
      email: ['', Validators.required],
      image: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  newPost() {
    const p = JSON.parse(localStorage.getItem('post')!) || [];
    const a = this.form.value;
    p.push(a);
    localStorage.setItem('post', JSON.stringify(p));

    this.router.navigate(['/post']);
    console.log('click', this.form.value);
  }
}
