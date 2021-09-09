import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector(({ pizzas }) => pizzas)
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const cartItems = useSelector(({ cart }) => cart.items)

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [dispatch, category, sortBy])

  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }

  const onSelectSortType = (sortObj) => {
    dispatch(setSortBy(sortObj))
  }

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClickCategory={onSelectCategory} />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={[
            {name: 'популярности', type: 'rating', order:'desc'},
            {name: 'цене', type: 'price', order:'desc'},
            {name: 'алфавиту', type: 'name', order:'asc'}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading 
          ? Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id}
                                           addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                           onClickAddPizza={handleAddPizzaToCart}
                                           {...obj} />)}
      </div>
    </div>
  )
}

export default Home;