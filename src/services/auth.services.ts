import {
	IAuth,
	IMeResponse,
	IRegister,
	IResult,
} from '../interfaces/auth.interfaces'
import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<IResult, IAuth>({
			query: body => ({
				url: '/Auth/login',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		getUser: builder.query<IMeResponse, void>({
			query: () => '/Auth/user',
			providesTags: ['Auth'],
		}),
		logout: builder.mutation<IResult, void>({
			query: () => ({
				url: '/Auth/logout',
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
		registration: builder.mutation<IResult, IRegister>({
			query: body => ({
				url: '/Auth/register',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useGetUserQuery,
	useLogoutMutation,
	useRegistrationMutation,
} = authApi
