import React from 'react'

const Show = (props) => {
    if(props.calc != ""){
        var show = "Your electricity bill is: ";
    }
  return (
    <div className='showres'>{show}{props.calc}</div>
  )
}

export default Show