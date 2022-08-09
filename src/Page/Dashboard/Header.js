import React from 'react'

function Header({ setisAdding}) {
  return (
    <header>
<h1>
  Employee System
</h1>
<div style={{ margintOP: '30px', marginBottom: '18px'}}>
  <button onClick={() => setisAdding(true)} className='round-button'>Add Button</button>
</div>
    </header>
  )
}

export default Header