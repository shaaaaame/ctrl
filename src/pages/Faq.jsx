import React from 'react'
import ExpandOnClick from '../components/ExpandOnClick/ExpandOnClick'

function faq() {
  return (
    <div className='faq page' id='faq'>
        <h1>FAQ</h1>
        <ExpandOnClick question='question' answer='answer'/>
    </div>
  )
}

export default faq