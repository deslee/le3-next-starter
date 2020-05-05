import React, { useState, useCallback } from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'
import clsx from 'clsx'
import useFetch from '../hooks/useFetch'

type Props = {}

const useStyles = makeStyles(theme => ({
  root: {

  }
}))

const Example: React.FC<Props> = (props) => {
  const classes = useStyles(props)
  const [data, error, refetch] = useFetch<{count: number}>('/api/counter')

  if (error) {
    throw error;
  }

  return <div className={clsx(classes.root)}>
    <Typography>example component</Typography>
    {<Typography>count: {data ? data.count : 'loading'}</Typography>}
    <Button onClick={refetch}>click to fetch</Button>
  </div>
}

export default Example