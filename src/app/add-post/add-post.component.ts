import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm;
  submited: boolean = false;
  currentDate = new Date();

  constructor(private ServicesServices: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cat: new FormControl('', [Validators.required]),
      date_post: new FormControl(this.currentDate),
    });
  }
  submitpost() {
    this.submited = true;
    if (this.postForm.invalid) {
      return;
    }
    this.ServicesServices.addpost(this.postForm.value);
    this.route.navigateByUrl("posts");
  }
}
