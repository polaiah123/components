import React, { Fragment } from 'react'

function Table({data,config, keyFn }) {
const renderedHeaders = config.map((column)=>{
    if(column.header) {
        return<Fragment key={column.label}>{column.header()}</Fragment>
    };
return(
    <th key={column.label}>{column.label}</th>
)
});

const renderedRows = data.map((rowData)=>{
 const renderedColumns = config.map((column) =>{
 return(
    <td className='p-2' key={column.label}> {column.render(rowData)} </td>
 )
 })

    return (
    <tr key={keyFn(rowData)} className='border-b-2'>
        {/* <td className='p-3'>{fruit.name}</td>
        <td className='p-3'>
           <div className={`p-3 p-2 ${fruit.color}`}></div>
            </td>
        <td className='p-3'>{fruit.score}</td> */}
        {renderedColumns}

    </tr>
    );
});


  return (
  <table className='table-auto border-sapcing-2'>
<thead>
    <tr className='border-b-2'>
    {renderedHeaders}
    </tr>
  
</thead>
<tbody>
{renderedRows}
</tbody>
  </table>
    );
}

export default Table