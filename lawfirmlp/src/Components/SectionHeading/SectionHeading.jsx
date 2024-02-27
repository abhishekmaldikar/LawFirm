import React from 'react'
import { Typography,Grid } from '@mui/material'

const SectionHeading = ({text , color}) => {
  return <Typography variant="h3" color={color} >{text}</Typography>
}

export default SectionHeading