import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user/model/user.model";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../shared/user/service/user.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    users: User[];
    public userData = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private userService: UserService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    }

    ngOnInit() {
        return this.userService.getUsers()
            .subscribe(data => {
                this.users = data;
            });
    }

    onSubmit() {
        const userLogin = this.userData.value.login;
        const isValidData = this.users.filter(user => {
            return user.login === userLogin && user.password === this.userData.value.password;
        });
        if (isValidData.length) {
            this.snackBar.open('Successfully loged in!', 'Close', {
                duration: 4000,
            });
            localStorage.setItem('userLogin', userLogin);
            localStorage.setItem('userId', this.userData.value.id);
            window.location.href = '/';
        } else {
            this.snackBar.open('Wrong user login or password.', 'Close', {
                duration: 4000,
            });
        }
    }
}
