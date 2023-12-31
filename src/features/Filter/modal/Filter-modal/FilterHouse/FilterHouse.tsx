import { filterActions } from 'entities/filter/model/slice/FilterSlice'
import { useDispatch } from 'react-redux'
import { Button } from 'shared/ui/button/Button'
import Switcher from 'shared/ui/switcher/Switcher'
import cls from './FilterHouse.module.scss'

interface FilterHouseProps {
	realtyType: { active: boolean; name: string }
}

const FilterHouse = (props: FilterHouseProps) => {
	const { realtyType } = props

	const dispatch = useDispatch()

	function changeToggleHouse() {
		dispatch(filterActions.setTypeHouse(!realtyType.active))
	}

	return (
		<div className={cls.filterHouse}>
			<div className={cls.filterFlatsTitle}>
				Дом
				<Switcher
					isOn={realtyType.active}
					onToggle={changeToggleHouse}
					id='house'
				/>
			</div>
			{realtyType.active && (
				<div className={cls.filterFlatsWrapper}>
					<div className={cls.filterFlatsSquare}>
						<h5 className={cls.filterFlatsTitleSquare}>Год постройки</h5>
						<div className={cls.filterFlatsInputItems}>
							<input
								className={cls.filterFlatsInput}
								type='number'
								placeholder='C'
							/>
							<input
								className={cls.filterFlatsInput}
								type='number'
								placeholder='По'
							/>
						</div>
					</div>
					<div className={cls.filterFlatsSquare}>
						<h5 className={cls.filterFlatsTitleSquare}>Этажей в доме</h5>
						<div className={cls.filterFlatsInputItems}>
							<input
								className={cls.filterFlatsInput}
								type='number'
								placeholder='От'
							/>
							<input
								className={cls.filterFlatsInput}
								type='number'
								placeholder='До'
							/>
						</div>
					</div>
					<div className={cls.filterFlatsItemBlog}>
						<h5 className={cls.filterFlatsTitleSquare}>Тип дома</h5>
						<div className={cls.filterFlatsGroupBtn}>
							<Button className={cls.filterFlatsBtn}>Кирпичный</Button>
							<Button className={cls.filterFlatsBtn}>Монолитный</Button>
							<Button className={cls.filterFlatsBtn}>Панельный</Button>
							<Button className={cls.filterFlatsBtn}>
								Кирпично - монолитный
							</Button>
							<Button className={cls.filterFlatsBtn}>Блочный</Button>
							<Button className={cls.filterFlatsBtn}>Деревянный</Button>
							<Button className={cls.filterFlatsBtn}>Подземная</Button>
							<Button className={cls.filterFlatsBtn}>Открытая</Button>
						</div>
					</div>

					<div className={cls.filterFlatsItemBlog}>
						<h5 className={cls.filterFlatsTitleSquare}>Парковка</h5>
						<div className={cls.filterFlatsGroupBtn}>
							<Button className={cls.filterFlatsBtn}>Закрытая</Button>
							<Button className={cls.filterFlatsBtn}>Подземная</Button>
							<Button className={cls.filterFlatsBtn}>Открытая</Button>
						</div>
					</div>

					<div className={cls.filterFlatsItemBlog}>
						<h5 className={cls.filterFlatsTitleSquare}>Мебель</h5>
						<div className={cls.filterFlatsGroupBtn}>
							<Button className={cls.filterFlatsBtn}>Да</Button>
							<Button className={cls.filterFlatsBtn}>Нет</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default FilterHouse
