import { Component } from '@angular/core'
import { AuthorService } from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{titleAuthor}}
        <ul>
            <li *ngFor="let author of authors">
                {{author}}
            </li>
        </ul>
    `,
    providers : [AuthorService]
})

export class AuthorsComponent {
    titleAuthor: 'this is author page';
    authors: string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getServices();
    }
}