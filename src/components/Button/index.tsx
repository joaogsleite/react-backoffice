import React, { memo, MouseEvent, FC, ReactNode } from 'react'
import classNames from 'classnames'

export interface IButtonProps {
  disabled?: boolean,
  className?: string,
  rounded?: boolean,
  text?: string | ReactNode,
  icon?: string,
  iconPosition?: string,
  color?: string,
  position?: string,
  onClick: ((event: MouseEvent) => void),
  style?: any,
  primary?: boolean,
}

const Button: FC<IButtonProps> = ({
  disabled,
  className = '',
  rounded,
  text,
  icon,
  iconPosition = 'left',
  color,
  position,
  onClick,
  style,
  primary,
}) => {

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
