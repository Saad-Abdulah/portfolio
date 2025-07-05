import React from 'react'

const Badge = ({ title, src, w="3", h="3" }) => {
    return (
        <span className='py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full flex items-center gap-2'>
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