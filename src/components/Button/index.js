import React,{memo} from 'react'
import classNames from 'classnames'

function Button({ disabled, className, rounded, text, icon, iconPosition = 'left', color, position, onClick, style, primary }) {

  const wrapperClasses = classNames({
    'button': true,
    ['is-'+color]: color,
    ['is-pulled-'+position]: position,
    'is-rounded': rounded,
    'is-static': disabled,
    'is-primary': primary,
    [className]: className,
  })

  const iconClass = classNames({
    ['fas fa-'+icon] : icon,
  })

  const wrapperStyle = {
    ...style,
    width: (rounded && !text) ? 36 : 'auto', 
  }

  return (
    <button onClick={onClick} className={wrapperClasses} style={wrapperStyle}>
      {text ?
        (icon ? (
          iconPosition === 'left' ? <>
            <span className="icon">
              <i className={iconClass}></i>&nbsp;
            </span>
            <span>{text}</span>
          </> : <>
              <span>{text}</span>
              <span className="icon">
                &nbsp;<i className={iconClass}></i>
              </span>
          </>
        ) : <span>{text}</span>)
      : <i className={iconClass}></i>
    }
    </button>
  )
}

export default memo(Button)
