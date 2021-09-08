class User {
    name: string
    email: string
    groups: Array<string>

    constructor(name: string, email: string, groups: Array<string>) {
        this.name = name
        this.email = email
        this.groups = groups
    }
}

export default User