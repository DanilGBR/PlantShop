export interface User {
 id: string;
 fullName: string;
 email: string;

}

export interface AppState {
 user: User | null;
}
