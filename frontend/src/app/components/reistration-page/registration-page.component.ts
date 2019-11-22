import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../users';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
    selector: 'registration-page',
    templateUrl: 'registration-page.component.html',
    styleUrls: ['registration-page.component.css'],
})

export class RegistrationPage implements OnInit {
    user: User = {
        age: null,
        name: '',
        weight: null
    };

    isEditMode: boolean = false;

    constructor(private readonly userService: UserService,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
    ) { }



    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let userId = params['id'];
            if (userId !== undefined) {
                this.isEditMode = true;
                this.userService.linkUser(userId).subscribe((user: User) => {
                    this.user = user;
                });
            }
        });

    }


    onClick() {
        this.route.queryParams.subscribe(params => {
            let userId = params['id'];
            this.userService.deleteUser(userId).subscribe((user: User) => {
                this.user = user;
                alert('Success!');
                this.router.navigateByUrl('some');
            });
        });
    }

    onClickChange(user: User) {
        this.route.queryParams.subscribe(params => {
            let userId = params['id'];
            this.userService.changeUser(user,userId).subscribe((user: User) => {
                this.user = user;
                alert('Success!');
                this.router.navigateByUrl('some');
            });
        });
    }


    onSubmit(user: User) {

         this.userService.addUser(user).subscribe((answer) => {
            if (answer) {
                alert('Success!');
                this.router.navigateByUrl('some');
            } else {
                alert('Error!');
            };

        });
    }
}