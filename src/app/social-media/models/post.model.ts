export class Post {
  id!: number;
  userId!: number;
  title!: string;
  createdDate!: string;
  content!: string;
  comments!: Comment[];
}

export class Comment {
  id!: number;
  userId!: number;
  comment!: string;
  createdDate!: string;
}
