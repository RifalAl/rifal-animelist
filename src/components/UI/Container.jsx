import React from 'react'

const Container = ({children, className}) => {
  return (
    <section className={`${className} px-5 md:px-20 pb-10`}>
      {children}
    </section>
  )
}

export default Container