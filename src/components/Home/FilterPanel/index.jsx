import React from 'react'
import { categoryList, ratingList } from '../../../constants'
import './style.css'

import FilterListToggle from '../../common/FilterListToggle'
import CheckboxProton from '../../common/CheckboxProton'
import SliderProton from '../../common/SliderProton'

export default function FilterPanel({ selectedCategory, selectToggle,
  selectedRating, selectRating, cusines, changeChecked ,selectedPrice,changesPrice}) {
  return (
    <div>
      {/* Category */}
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
      </div>
      {/* Cusines */}
      <div className='input-group'>
        <p className='lable'>Cuision</p>
        {cusines.map(cuisine => <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked} />)
        }
      </div>
      {/* Price Range */}
      <div className='input-group'>
        <p className='label-range'>Cuisine</p>
        <SliderProton value={selectedPrice} changedPrice={changesPrice}/>
      </div>
      {/* Star Rating */}
      <div className='input-group'>
        <p className='lable'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating} selectToggle={selectRating}
        />
      </div>
    </div>
  )
}
