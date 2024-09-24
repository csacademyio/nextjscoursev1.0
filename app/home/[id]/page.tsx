import React from 'react'


interface Props {
    params: {id: number}
}
const UserDetailPage = ({params}: Props) => {
  return (
    <div>UserDetailPage {params.id}</div>
  )
}

export default UserDetailPage