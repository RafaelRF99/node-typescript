
const db = [
    {
        name: "Rafael",
        email: "rafael@hotmail.com"
    }
]

export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log("DB atualizado", db)
    }

    getAllUsers = () => {
        return db
    }

    deleteUser = (email: string) => {
        const indexToDelete = db.findIndex(user => user.email === email);

        if (indexToDelete !== -1) {
            db.splice(indexToDelete, 1);
            console.log("Usuário excluído com sucesso!");
        } else {
            console.log("Usuário não encontrado");
        }
    }
}