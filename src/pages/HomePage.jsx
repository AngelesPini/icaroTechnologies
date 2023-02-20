import React from 'react'
import Header from '../components/organismos/header/header'
import PorqueElegirnos from '../components/organismos/porqueElegirnos/porqueElegirnos'
import SoftwareEscalar from '../components/organismos/softwareEscalar/softwareEscalar'
import Transformamos from '../components/organismos/trasnformamos/transformamos'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <PorqueElegirnos/>
        <SoftwareEscalar/>
        <Transformamos/>
    </>
  )
}
