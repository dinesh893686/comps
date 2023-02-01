import React from 'react'
import className from 'classnames'
export default function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
    //  classes = 'flex items-center px-3 py-3 border border-blue-500'
      const classes = className('flex items-center px-3 py-3 border',{
      'border-blue-500 bg-blue-500 text-white':primary,
      'border-gray-900 bg-gray-900  text-white ':secondary
      


      });

    return (
       

        <button className={classes}>
            {children}
        </button>

    )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (count > 1) {
            return new Error("Only one of primary,secondary,success,warning,danger can be true")
        }
    }

}


