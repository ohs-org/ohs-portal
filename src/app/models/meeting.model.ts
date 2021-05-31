import { User } from './user.model';
export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: number;
  location: string;
  description: string;
  host: User;
  members: User[];
}
