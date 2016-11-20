"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var course_model_1 = require('./course.model');
var auto_grow_directive_1 = require('./auto-grow.directive');
var forms_1 = require('@angular/forms');
var CoursesComponent = (function () {
    function CoursesComponent(courseService, fb) {
        this.title = "The title of courses page";
        this.email = new forms_1.FormControl("", forms_1.Validators.required);
        this.selectCourse = new course_model_1.Course(0, '');
        this.courses = courseService.getCourses();
        this.loginForm = fb.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    CoursesComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    CoursesComponent.prototype.onItemClicked = function (item) {
        this.selectCourse = item;
    };
    CoursesComponent.prototype.onClickAddCourse = function (item) {
        debugger;
        this.courses.push(item);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n        <h2>Courses</h2>\n        {{title}}\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"let course of courses\" (click)=\"onItemClicked(course)\">\n                {{course.id}},{{ course.name}}\n            </li>\n        </ul>\n        <!-- <input type=\"text\" [(ngModel)]=\"selectCourse.name\" /> -->\n        <input type=\"text\"  />\n        <button (click)=\"onClickAddCourse(selectCourse)\" >Add Course</button>\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n            <input name=\"email\" formControlName=\"email\">\n            <input name=\"password\" type=\"password\" formControlName=\"password\">\n            <button type=\"submit\">Log in</button>\n        </form>\n        ",
            providers: [course_service_1.CourseService],
            directives: [auto_grow_directive_1.AutoGrowDirective]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, forms_1.FormBuilder])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map