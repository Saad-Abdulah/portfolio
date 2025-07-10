import React from 'react'

const Badge = ({ title, src, w="4", h="4" }) => {
    return (
        <span className='py-1 px-1 text-xs text-Snow bg-EveningBlack rounded-full flex items-center gap-1'>
            {src && (
                <img 
                    src={src} 
                    alt={`${title} icon`} 
                    className={`w-${w} h-${h} object-contain`}
                />
            )}
            {title}
        </span>
    )
}

export default Badge