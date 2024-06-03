import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from '../../components/author/author.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule, RouterModule],
})
export class AuthorModule {}
