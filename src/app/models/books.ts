export interface IBook {
  id: number;
  title: string;
  authorId: string;
  firstName: string;
  lastName: string;
  publication_year: number | string;
  genre: string;
  description: string;
  cover_image: string;
}
