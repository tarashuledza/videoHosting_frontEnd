import { Avatar, Box, IconButton } from '@mui/material'
import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { MdOutlineVideoCall } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../interfaces/auth.interfaces'
import { useGetUserQuery } from '../../../../services/auth.services'
import s from './Icons.module.scss'
import UserMenu from './userMenu/UserMenu'
interface IProps {
	user?: IUser
}
const Icons: React.FC<IProps> = ({}) => {
	const { data, isLoading } = useGetUserQuery()
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	return (
		<>
			<Box className={s.container}>
				<IconButton>
					<Link to={''}>
						<MdOutlineVideoCall className={s.addVideoIcon} />
					</Link>
				</IconButton>
				{!isLoading && data ? (
					<IconButton onClick={handleClick}>
						<Avatar>S</Avatar>
					</IconButton>
				) : (
					<Link to='login'>
						<Box className={s.login}>
							<BiUser />
							Login
						</Box>
					</Link>
				)}
			</Box>
			<UserMenu
				user={data?.user}
				anchorEl={anchorEl}
				setAnchorEl={setAnchorEl}
			/>
		</>
	)
}

export default Icons
