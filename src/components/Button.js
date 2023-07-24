import className from 'classnames';
import React from 'react'

function Button({
    children,
    primary,
    secondary,
    danger,
    warning,
    outline,
    rounded,
    success,
    ...rest

}) {
    const classes = className( rest.className, 'flex item-centre px-3 py-1.5 border', {
        // 'border-blue-500 bg-sky-800 text-white':primary,
        // 'border-black-500 bg-green-800 text-white':secondary,
        // 'border-black-500 bg-sky-900 text-white':success,
        // 'border-black-500 bg-violet-800 text-white':warning,
        // 'border-black-500 bg-gray-800 text-white':danger,
        // 'rounded-full': rounded,
        // 'bg-white': outline,
        // 'text-slate-900	': primary && outline,
        // 'text-stone-500	': outline && secondary,
        // 'text-red-600': outline && danger,
        // 'text-yellow-500': outline && warning,
        // 'text-blue-950' : outline && success
        "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-900": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-400 bg-yellow-400": warning,
    "border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "text-white":
      !outline && (primary || secondary || success || warning || danger),
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
    });

  return (
    <button {...rest} className={classes} >{children}</button>
    )
}

Button.propTypes = {
checkVariationValue: ({ primary, secondary, warning, success, danger}) => {
const count = 
Number(!!primary) +
Number(!!secondary)+
Number(!!warning) +
Number(!!success) +
Number(!!danger) ;

if (count > 1) {
    return new Error(
        'only one primary,secondary,warning,success,danger can be true'
    );
}

}
};

export default Button;