import { UserAuthState } from 'src/app/features/auth/interfaces/auth';
import { Category } from './productCategories';

interface CategoriesState {
  categories: Category[];
}

export interface AppState {
  auth: UserAuthState;
  categories: CategoriesState;
}
