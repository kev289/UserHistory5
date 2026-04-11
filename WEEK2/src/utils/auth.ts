import type { User } from "../interfaces/User";
import { users } from "../data/users";

export function authentication(username: string, password: string): User | null {
    const user = users.find(u => u.UserName === username && u.Password === password);
    if (user) {
        return user;
    }
    return null;
}

