import React from 'react'
import styled from 'styled-components'


const FilterBarDiv = styled.div`
    


`
const FilterButton = styled.button`
    
`

const FilterBar = ({setcategory,uniqueCategories}) => {



  return (
    <FilterBarDiv>
 {
  uniqueCategories.map((item)=>{
    return <FilterButton onClick={()=>setcategory(item.toString())}>
      {item}
    </FilterButton>
  })
 }
    </FilterBarDiv>
  )
}

export default FilterBar