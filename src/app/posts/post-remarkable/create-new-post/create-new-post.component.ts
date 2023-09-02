import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css'],
})
export class CreateNewPostComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fireStorage: AngularFireStorage,
    private toastrService: ToastrService
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
      this.toastrService.success('Post Successful', 'Success!');
    } else {
      this.form.markAllAsTouched();
      this.toastrService.error(
        'Please fill out the information completely',
        'Error!'
      );
    }
  }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
    }
  }
}
