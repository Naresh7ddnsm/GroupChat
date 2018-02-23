import React from 'react';
export const Container = ({children, className, ...props}) => {
    return <div className={['container', className].join(' ')} {...props}> { children } </div>
}
export const Row = ({className, children, ...props}) => {
    return <div className={["row", className].join(' ')} {...props}>{ children }</div>
}
export const Grid = ({className, children, ...props}) => {
    return <div className={className} {...props}>{ children }</div>
}