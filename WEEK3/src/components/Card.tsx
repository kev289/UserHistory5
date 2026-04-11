import React from 'react';
import type { CardProps } from '../interfaces/Card';
import { Badge } from './Badge';

export const Card: React.FC<CardProps> = ({ 
    title, 
    type, 
    imageUrl, 
    footer, 
    badgeLabel, 
    badgeStatus = "neutral" 
}) => {
    return (
        <div className={`card card-${type}`} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
            
            {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '4px' }} />}
            
            <div className="card-body" style={{ margin: '12px 0' }}>
                <Badge label={badgeLabel} status={badgeStatus} />
                
                <h2 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{title}</h2>
            </div>

            {footer && (
                <div className="card-footer" style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
                    {footer}
                </div>
            )}
        </div>
    );
};