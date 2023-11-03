export interface IRegister {
	firstName: string
	lastName: string
	email: string
	password: string
}
export interface IAuth extends Omit<IRegister, 'firstName, lastName'> {}
export interface IResult {
	message: string
	isSuccess: boolean
}
export interface IUser {
	id: number
	firstName: string
	lastName: string
	email: string
}
export interface IMeResponse {
	isSuccess: boolean
	user: IUser
}
