import { IconButton, InputBase, Paper } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai'
import s from './Search.module.scss'
const Search: React.FC = () => {
	return (
		<>
			<Paper component='form' className={s.searchContainer}>
				<InputBase
					className={s.input}
					fullWidth
					placeholder='Search'
					inputProps={{ 'aria-label': 'search google maps' }}
				/>
				<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
					<AiOutlineSearch />
				</IconButton>
			</Paper>
		</>
	)
}

export default Search
