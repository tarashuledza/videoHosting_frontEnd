import { api } from './api'

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideoById: builder.query<IVideoResponse, number>({
			query: id => `Video/${id}`,
		}),
	}),
})

export const { useGetVideoByIdQuery } = videoApi
