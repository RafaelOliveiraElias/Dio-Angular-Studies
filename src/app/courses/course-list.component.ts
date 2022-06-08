import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular forms',
        imageUrl: '/assets/images/animations.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular http',
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate: 'November, 12, 2019'
      }
    ]
  }
}