import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fireStorage: AngularFireStorage
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      product: ['', Validators.required],
      email: ['', Validators.required],
      image: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  newPost() {
    if (this.form.valid) {
      const p = JSON.parse(localStorage.getItem('post')!) || [];
      const a = this.form.value;
      p.push(a);
      localStorage.setItem('post', JSON.stringify(p));

      this.router.navigate(['/post']);
      console.log('click', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
    }
  }
}
