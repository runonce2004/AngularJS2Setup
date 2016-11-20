import { Course } from './course.model'

export class CourseService  {
    getCourses() {
        //return ["Course", "Course1"];
        return [
            new Course(1, 'Course1'),
            new Course(2, 'Course2')
        ];
    }
}

