import React, { useEffect } from 'react'
import SearchBar from '../components/Home/SearchBar'
import List from '../components/Home/List'
import EmptyView from '../components/common/EmptyView'
import FilterPanel from '../components/Home/FilterPanel'
import './style.css'
import { useState } from 'react'
import { dataList } from '../constants'

const Home = () => {
  const [inputSearch,setInputSearch] = useState('')
  const [list ,setList] = useState(dataList)
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [selectedRating,setSelectedRating] = useState(null)
  const [selectedPrice,setSelectedPrice] = useState([1000,5000])
  const [cusines, setCusines] = useState([
    {
      id:1,
      checked:false,
      lable:'American',
    },
    {
      id:2,
      checked:false,
      lable:'Chinese',
    },
    {
      id:3,
      checked:false,
      lable:'Italian',
    }
  ])

  const handdleSelectCategory = (event,value) => !value ? null : setSelectedCategory(value)

  const handleSelectRating = (event,value) => !value ? null : setSelectedRating(value)

  const handleChangeChecked = (id) =>{
    const cuisinesStateList = cusines
  const changeCheckedCuisines = cuisinesStateList.map((item)=> item.id === id ? {...item , checked: !item.checked}:item) 

   setCusines(changeCheckedCuisines)
  }

  const handleChangePrice =(event,value) => setSelectedPrice(value)

  const applyFilters = ()=>{
    let updatedList = dataList
    // Rating Filter

    if(selectedRating){
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      )
    }
    if(selectedCategory){
      updatedList = updatedList.filter(
        (item)=>item.category === selectedCategory
      )
    }
    // /cusine Filter
    // ['americaan','chinese']
    const cusineChecked = cusines
    .filter((item)=>item.checked).map((item)=>item.lable.toLowerCase())

    if(cusineChecked.length){
      updatedList = updatedList.filter((item)=>
      cusineChecked.includes(item.cuisine)
      )
    }

    // Price Filter
    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]

    updatedList = updatedList.filter((item)=>item.price >= minPrice && item.price <= maxPrice)

    // Search filter

    if(inputSearch){
      updatedList = updatedList.filter((item)=>
      item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) != -1)
    }
     
    setList(updatedList)
  }
  useEffect(()=>{
    applyFilters()
  },[selectedRating,selectedCategory,cusines,selectedPrice,inputSearch])

  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar value = {inputSearch} changeInput = {e => setInputSearch(e.target.value)}/>
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel selectedCategory={selectedCategory} 
          selectToggle={handdleSelectCategory}
          selectRating={handleSelectRating}
          selectedRating={selectedRating}
          cusines={cusines}
          changeChecked={handleChangeChecked}
          selectedPrice={selectedPrice}
          changesPrice={handleChangePrice}
          />
        </div>
      

      {/* Side Panels */}
      <div className="home_list-wrap">
      <List list = {list}/>

        </div>
     
      {/* List & Dempty View */}
      {/* <EmptyView/> */}
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home