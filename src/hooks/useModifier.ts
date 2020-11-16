import cn from 'classnames';
import { useMemo } from 'react';

export interface ModifierProps {
  modifier?: string;
}

export function useModifier(
  element: string,
  modifiers?: string | (string | undefined)[],
  ...args: any[]
) {
  const styles = useMemo(
    () => cn(element, parseModifier(element, modifiers), ...args),
    [args, element, modifiers]
  );
  return styles || '';
}


export function parseModifier(
    prefix: string,
    modifier?: string | (string | undefined)[]
  ): string | undefined {
    if (modifier && modifier.length > 0) {
      const modifiers = Array.isArray(modifier) ? modifier : modifier.split(' ');
      return modifiers
        .filter((m) => m)
        .map((m) => `${prefix}--${m?.trim()}`)
        .join(' ');
    }
  }