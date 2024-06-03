import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  constructor(private route: ActivatedRoute) {}
  authorName = '';

  ngOnInit() {
    this.authorName = this.route.snapshot.paramMap.get('id')!;
  }
}
