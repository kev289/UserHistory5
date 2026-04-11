import type { User } from '../interfaces/User.ts'

export const users: User[] = [
    {
        id: 1,
        UserName: 'kevinu',
        Password: '123456',
        role: 'admin',
        createdAt: Date.now()
    },
    {
        id: 2,
        UserName: 'paulita',
        Password: '123456',
        role: 'user',
        createdAt: Date.now()
    }
]