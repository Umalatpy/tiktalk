export interface Profile {
    id: number,
    name: string,
    username: string,
    description?: string,
    email: string,
    avatarUrl: string | null,
    stack: string[] | null
}