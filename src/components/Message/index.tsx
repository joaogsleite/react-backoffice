import React, { FC, memo } from 'react'

export interface IMessageProps {
  success?: boolean,
  error?: boolean
  loading?: boolean,
  text?: string,
  icon?: string,
}

const Message: FC<IMessageProps> = ({ success, error, loading, text, icon }) => {
  return <div className="has-text-centered">

    { loading && (
      <i className="fa fa-3x fa-spinner fa-pulse"></i>
    )}

    { error && (
      <i className="fas fa-3x fa-exclamation-circle"></i> 
    )}

    { success && (
      <i className="fas fa-3x fa-check"></i>
    )}

    { icon && (
      <i className={ 'fas fa-3x fa-'+icon }></i> 
    )}

    {text && (
      <div style={{marginTop:25}}>
        {text}
      </div>
    )}

  </div>
}

export default memo(Message)
