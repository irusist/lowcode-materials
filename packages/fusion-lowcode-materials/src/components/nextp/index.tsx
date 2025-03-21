import React, { CSSProperties, forwardRef } from 'react';

const NextP = forwardRef<HTMLDivElement, {className?: string; style: CSSProperties }>((props, ref) => {
  return (
    <div className={props.className} style={props.style} ref={ref}>
      {props.children}
    </div>
  )
})

NextP.displayName = 'NextP';

export default NextP;