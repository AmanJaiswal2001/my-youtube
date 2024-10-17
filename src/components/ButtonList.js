import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Cricket"/>
        <Button name="Game"/>
        <Button name="Live"/>
        <Button name="News"/>
        <Button name="Music"/>
        <Button name="Cinema"/>
    </div>
  )
}

export default ButtonList