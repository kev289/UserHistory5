import React from 'react';
import type { BadgeProps } from '../interfaces/Badge';

export const Badge: React.FC<BadgeProps> = ({ 
    label, 
    status = "neutral", 
    icon 
}) => {
    return (
        <div className={`badge badge-${status}`}>
            {icon && <span className="badge-icon">{icon}</span>}
            <span className="badge-label">{label}</span>
        </div>
    );
};