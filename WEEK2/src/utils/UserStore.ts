import { AddUserMetadata } from "./decorators";
import type { User } from "../interfaces/User";
import { users } from "../data/users";

export class UserStore {
    
    list(): User[] {
        console.log("[GET] Listando usuarios...");
        return users;
    }

    @AddUserMetadata
    create(newUser: User): void {
        console.log("[POST] Creando usuario...");
        users.push(newUser);
    }
    

    findByName(name: string): User | null {
        console.log("[GET] Buscando usuario...");
        return users.find(u => u.UserName === name) || null;
    }

    update(id: number, updatedUser: User): void {
        console.log("[PUT] Actualizando usuario...");
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = updatedUser;
        }
    }

    remove(id: number): void {
        console.log("[DELETE] Eliminando usuario...");
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users.splice(index, 1);
        }
    }
}