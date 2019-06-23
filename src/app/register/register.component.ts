import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user/model/user.model";
import {UserService} from "../shared/user/service/user.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public userData = this.fb.group({
        login: ['', Validators.required],
        firstName: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*')]]
    });

    constructor(private userService: UserService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.userService.postUser(this.userData.value)
            .subscribe(data => {
                this.snackBar.open('Successfully created an account.', 'Close', {
                    duration: 4000,
                });
                this.router.navigate(['login']);
                this.userData.reset();
            }, error => {
                console.log('Something went wrong: ', error.error);
            });
    }
}
