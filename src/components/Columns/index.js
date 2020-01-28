import React, {memo} from 'react'
import classNames from 'classnames'

const Columns = memo(function({children, className}) {
  const columnClasses = classNames({
    'columns': true,
    [className]: className,
  })
  return <div className={columnClasses}>
    {children}
  </div>

})

const Column = memo(function({children, align, className}) {
  const classes = classNames({
    'column': true, 
    [className]: className,
    ['has-text-'+align]: align,
  })
  const styles = {
    textAlign: align,
  }
  return <div style={styles} className={classes}>
    {children}
  </div>

})

export { 
  Column, 
  Columns,
}
