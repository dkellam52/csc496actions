import React from 'react'
import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'
import Pie from '../components/pie'

export default () => {
  const dispatch = useDispatch()
  const pieDataValues = usePieData()

  console.log(pieDataValues)

  const pieDataUpdateActionFunction = pieDataUpdateAction
  return (
    <>
      <button onClick={() => dispatch(pieDataUpdateActionFunction())}>
        Update Data
      </button><h1>Hello, World!</h1>
      <Pie
        data={pieDataValues}
        width={600}
        height={600}
        innerRadius={100}
        outerRadius={200}
        cornerRadius={15}
      />
    </>
  )
}

