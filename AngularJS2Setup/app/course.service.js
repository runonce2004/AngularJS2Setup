"use strict";
var course_model_1 = require('./course.model');
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        //return ["Course", "Course1"];
        return [
            new course_model_1.Course(1, 'Course1'),
            new course_model_1.Course(2, 'Course2')
        ];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map