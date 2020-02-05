import React, { memo, MouseEvent, FC, ReactNode } from 'react'
import classNames from 'classnames'

import classes from './style.module.scss';
import Icon from 'components/Icon';

export interface IButtonProps {
  disabled?: boolean,
  className?: string,
  rounded?: boolean,
  text?: string | ReactNode,
  icon?: string,
  iconPosition?: 'left' | 'right',
  color?: string,
  position?: 'left' | 'right',
  onClick: ((event: MouseEvent) => void),
  style?: any,
}

const Button: FC<IButtonProps> = ({
  disabled,
  className = '',
  rounded,
  text,
  icon = '',
  iconPosition = 'left',
  color,
  position,
  onClick,
  style,
}) => {

  const wrapperClasses = classNames({
    [classes.button]: true,
    [classes[color || '']]: color,
    [classes.position]: position,
    [classes.rounded]: rounded,
    [className]: className,
  });

  return (
    <button onClick={onClick} className={wrapperClasses} style={style}>
      {text 
        ? icon 
          ? iconPosition === 'left' 
            ? <>
                <Icon name={icon} />
                <span>{text}</span>
              </> 
            : <>
                <span>{text}</span>
                <Icon name={icon} />
              </>
          : <span>{text}</span>
        : <Icon name={icon} />
    }
    </button>
  )
}

export default memo(Button);
