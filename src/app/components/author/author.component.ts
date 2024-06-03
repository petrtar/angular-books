import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorApiService } from '../../services/authorApi.service';
import { IAuthor } from '../../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  constructor(
    private route: ActivatedRoute,
    private authorApiService: AuthorApiService
  ) {}
  author: IAuthor | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.authorApiService.getAuthorById(id).subscribe((data) => {
      this.author = data;
    });
  }
}
