import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import s from './Layout.module.scss'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
const Layout: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(true)
	return (
		<>
			<div className={s.layoutContainer}>
				<Header
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					//user={data?.user}
				/>

				<Navbar openMenu={openMenu} />
			</div>
			<div className={s.outlet}>
				<Outlet context={{ setOpenMenu } satisfies ContextType} />
			</div>
		</>
	)
}
type ContextType = {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function useCustomContext() {
	return useOutletContext<ContextType>()
}
export default Layout
