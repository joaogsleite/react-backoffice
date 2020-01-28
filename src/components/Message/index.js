import React, { memo } from 'react'

function Message ({ success, error, loading, text, icon }) {
  return <div className="has-text-centered">

    { loading && (
      <i className="fas fa-3x fa-spinner fa-pulse"></i>
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

    <div style={{marginTop:25}}>
      {text}
    </div>

  </div>
}

export default memo(Message)
