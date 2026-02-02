export type TabType = 
  | 'dashboard' 
  | 'posts' 
  | 'media' 
  | 'users' 
  | 'comments' 
  | 'seo' 
  | 'appearance' 
  | 'settings';

export interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  status: 'Published' | 'Draft' | 'Trash';
}

export interface User {
  name: string;
  role: 'Administrator' | 'Editor' | 'Author';
  email: string;
  status: 'Active' | 'Pending';
}