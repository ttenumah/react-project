import React from 'react'

function ListEmployee() {
  return (
    <div className='contain-table'>
      <table class="table table-bordered table-dark">
    <thead>
      <tr>
        <th>Head 1</th>
        <th>Head 2</th>
        <th>Head 3</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Description 1</td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
      <tr>
        <td>Description 1</td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
      <tr>
        <td>Description 1</td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
    </tbody>
  </table></div>
  )
}

export default ListEmployee
