import React, { FC, ReactElement, useEffect, useState } from 'react'
import { LayoutComp } from '../types'


const Layout : FC = ({children} : LayoutComp) => {
  return <>
	{children}
  </>
}

export default Layout