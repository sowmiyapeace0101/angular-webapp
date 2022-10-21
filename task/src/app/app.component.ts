import { Component ,OnInit  } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { group } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  signInButton: HTMLElement | any;
  container: HTMLElement | any;
  signUpButton: HTMLElement | any;
  toggle: boolean = false;
  show :boolean = false;
  loginForm:any = FormGroup;

  constructor( private fb1:FormBuilder ,
    private route: ActivatedRoute,
  private router: Router  ){  }
  ngOnInit() {
    // console.log("hi");
    this.intform();
    this.signUpButton = document.getElementById('signUp');
    this.signInButton = document.getElementById('signIn');
    this.container = document.getElementById('container');

  }


intform(){
this.loginForm =this.fb1.group({
  email:[''],
  password:['']
})
}

  signUpclick() {
    this.toggle = false;
    this.container.classList.add("right-panel-active");
  }

  signInClick() {
    this.container.classList.remove("right-panel-active");
  }
  showpass() {
    this.toggle = !this.toggle;
  }

  login(){
    console.log(this.loginForm.value,"ngOnInitngOnInit");
debugger
    if (this.loginForm.value.password === 'AXESSTECHNOLOGY') {
      this.router.navigate(['dashboard']);
    } else {
      alert("Invalid password and user")
    }
    
  }

}