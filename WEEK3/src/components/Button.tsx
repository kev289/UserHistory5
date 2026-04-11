import React from 'react';
import type { ButtonProps } from '../interfaces/Button';

export const Button: React.FC<ButtonProps> = ({ 
    text, 
    variant = "primary", 
    size = "md", 
    disabled, 
    loading, 
    leftIcon, 
    rightIcon, 
    onClick 
}) => {
    return (
        <button 
            className={`btn btn-${variant} btn-${size}`} 
            onClick={onClick}
            disabled={disabled || loading}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: disabled || loading ? 'not-allowed' : 'pointer' }}
        >
            {loading ? '...' : leftIcon}
            
            <span>{text}</span>

            {!loading && rightIcon}
        </button>
    );
};