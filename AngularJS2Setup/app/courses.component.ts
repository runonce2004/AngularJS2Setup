import { Component } from '@angular/core'
import { CourseService } from './course.service'
import { Course } from './course.model';
import { AutoGrowDirective } from './auto-grow.directive'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses" (click)="onItemClicked(course)">
                {{course.id}},{{ course.name}}
            </li>
        </ul>
        <!-- <input type="text" [(ngModel)]="selectCourse.name" /> -->
        <input type="text"  />
        <button (click)="onClickAddCourse(selectCourse)" >Add Course</button>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">
            <input name="email" formControlName="email">
            <input name="password" type="password" formControlName="password">
            <button type="submit">Log in</button>
        </form>
        `  
        ,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})


export class CoursesComponent {
    title = "The title of courses page";
    courses: Course[];
    loginForm: FormGroup;
    email = new FormControl("", Validators.required);
    public selectCourse: Course = new Course(0, ''); 

    constructor(courseService: CourseService, fb: FormBuilder) {
        this.courses = courseService.getCourses();
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    } 

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }

    onItemClicked(item : Course) {
        this.selectCourse = item;
    }

    onClickAddCourse(item: Course) {
        debugger;
        this.courses.push(item);
    }
}