import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'Registration Form';
  data:any={}
  array:any=[];
angForm;
  constructor(private http: HttpClient,private form: FormBuilder,private logform:Router) {
   
  }

  ngOnInit(){
    this.angForm = this.form.group({
       name: ['', [Validators.required,Validators.minLength(4)] ],
       dob: ['', [Validators.required] ],
       email: ['', [Validators.required,Validators.email]],
       num: ['',[Validators.required,Validators.pattern("[0-9]{10}")]],
       password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       abtu: ['',[Validators.required]],
       states: ['', [Validators.required]],
       gender: ['', [Validators.required]],
       accept: ['', [Validators.requiredTrue]]
    });
  }
    // @Output() edata =new EventEmitter();
    onSubmit(data) {
      console.log(this.angForm.value)
      // this.array.push((this.angForm.value))
      // this.array=this.angForm.value;
      this.http.post('http://localhost:7000/add',data)
      .subscribe((res: Request) => {
        this.array=res;
      }, error => {
        console.log(error);
      });
      this.logform.navigate(["login"]);
      // this.endata.navigate(["data"]);
      // this.edata.emit(this.angForm.value.name);
     this.angForm.reset()
    }

   

}

