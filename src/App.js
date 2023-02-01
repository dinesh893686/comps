import React from 'react'
import Button from './Button'
export default function App() {
  return (
    <div>
   <div>
    <Button secondary rounded>
        Click Me!!
    </Button>
   </div>
   <div>
    <Button  danger outline>
         Buy Now!!
    </Button>
   </div>
   <div>
    <Button  warning outline>
     See Deals!
    </Button>
   </div>
   <div>
    <Button  secondary outline>
     Hide Ads!!
    </Button>
   </div>
   <div>
    <Button primary rounded>
         Something!
    </Button>
   </div>

    </div>
  )
}
