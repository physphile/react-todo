import { MouseEventHandler } from 'react';
import './SuperButtonIcon.module.css';
import { IconsNames } from '../utils';

interface SuperButtonIconProps {
  iconName: IconsNames;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function SuperButtonIcon({
  iconName,
  onClick = () => {},
  className = ''
}: SuperButtonIconProps) {
  return (
    <button onClick={onClick} className={className}>
      <span className="material-symbols-outlined" style={{ color: 'inherit' }}>
        {iconName}
      </span>
    </button>
  );
}
