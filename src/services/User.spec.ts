import { UserService } from "./UserService"

describe('UserService', () => {
    const userService  = new UserService()

    it('Deve adicionar usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('Maria', 'maria@hotmail.com')
        expect(mockConsole).toHaveBeenCalled()
    })
})