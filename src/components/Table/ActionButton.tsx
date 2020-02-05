import React, { FC, memo, useCallback } from 'react';
import Button, { IButtonProps } from 'components/Button';

export enum EActionType {
  edit = 'edit',
  delete = 'delete',
  view = 'view',
};

export interface IActionFunction{
  (data: any): void
}

export interface IActionButtonProps {
  data: any,
  type: EActionType,
  onClick?: IActionFunction,
};

function getButtonProps(type: EActionType): Partial<IButtonProps> {
  switch(type) {
    case EActionType.edit:
      return { icon: 'edit' };
    case EActionType.delete:
      return { icon: 'times', color: 'danger' };
    case EActionType.view:
    default:
      return { icon: 'eye' };
  }
}

const ActionButton: FC<IActionButtonProps> = ({ data, type, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(data);
    }
  }, [onClick, data])
  return (
    <Button
      {...getButtonProps(type)}
      onClick={handleClick}
    />
  )
}

export default memo(ActionButton);