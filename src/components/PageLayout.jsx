import React, { Children } from 'react'


const PageLayout = ({Header,Footer,children}) => {
    console.log(Header)
  return (
    <div>
        {Header}
        {children}
        {Footer}
    </div>
  )
}

export default PageLayout