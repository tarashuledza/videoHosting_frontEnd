import { Box, IconButton } from '@mui/material'
import { BsList } from 'react-icons/bs'
import s from './Logo.module.scss'
interface IProps {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
	openMenu: boolean
}
const Logo: React.FC<IProps> = ({ setOpenMenu, openMenu }) => {
	const handleClick = () => {
		setOpenMenu(!openMenu)
	}
	return (
		<>
			<Box className={s.menuIcon}>
				<IconButton onClick={handleClick}>
					<BsList />
				</IconButton>
			</Box>
		</>
	)
}

export default Logo
