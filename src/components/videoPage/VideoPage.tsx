import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useGetVideoByIdQuery } from '../../services/video.services'
import { useCustomContext } from '../layout/Layout'

const VideoPage: React.FC = () => {
	const { id } = useParams()
	const { data: video } = useGetVideoByIdQuery(Number(id))
	const { setOpenMenu } = useCustomContext()
	console.log(video?.path)
	useEffect(() => {
		setOpenMenu(false)
	}, [setOpenMenu])
	return (
		<div>
			<ReactPlayer width={800} height={500} controls={true} url={video?.path} />
		</div>
	)
}

export default VideoPage
