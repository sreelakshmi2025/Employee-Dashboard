
import React from 'react';
import { IconProps } from './IconProps';

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}>
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.023-.194-1.37-1.022-1.37-2.04 0-3.75 1.25-3.75 3.75v.5a2.25 2.25 0 0 0 2.25 2.25h1.5M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm-3 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" 
        />
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.75 15.75a3 3 0 0 0-3-3M15.75 15.75a3 3 0 0 0 3 3M15.75 15.75v3.75m-7.5-6.75a3 3 0 0 0-3-3M9 12.75a3 3 0 0 0 3 3M9 12.75v3.75" 
        />
    </svg>
);
