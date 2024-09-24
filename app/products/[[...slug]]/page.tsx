import React from 'react'


//[...slug] = catch all statement that requires one parameter otherwise we get a 404 error
//[[...slug]] = catch all statement that makes parameters optional e.g no 404 error
//Accessing SearchParams = use searchParams: {sortOrder: string}

interface Props {
    params: {slug: string[]}
    searchParams: {sortOrder: string}
}
const ProductsPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
  return (
    <div>ProductsPage {slug} {sortOrder}</div>
  )
}

export default ProductsPage