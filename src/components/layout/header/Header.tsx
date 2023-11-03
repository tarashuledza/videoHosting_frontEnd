import { IUser } from '../../../interfaces/auth.interfaces'
import s from './Header.module.scss'
import Icons from './icons/Icons'
import Logo from './logo/Logo'
import Search from './search/Search'

interface IProps {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
	openMenu: boolean
	user?: IUser
}

const Header: React.FC<IProps> = ({ setOpenMenu, openMenu }) => {
	return (
		<header className={s.header}>
			<Logo setOpenMenu={setOpenMenu} openMenu={openMenu} />
			<Search />
			<Icons //user={user}
			/>
		</header>
	)
}

export default Header
