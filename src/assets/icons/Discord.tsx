import React from 'react'

const Discord = (props: any): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 18}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill={props.fill || '#fff'}
        d="M23.148 17.1c0 1.098-.81 1.998-1.836 1.998-1.008 0-1.836-.9-1.836-1.998 0-1.098.81-1.998 1.836-1.998s1.836.9 1.836 1.998zm-8.406-1.998c-1.026 0-1.836.9-1.836 1.998 0 1.098.828 1.998 1.836 1.998 1.026 0 1.836-.9 1.836-1.998.018-1.098-.81-1.998-1.836-1.998zM33.75 3.708V36c-4.535-4.007-3.084-2.68-8.352-7.578l.954 3.33H5.94a3.699 3.699 0 01-3.69-3.708V3.708A3.699 3.699 0 015.94 0h24.12a3.699 3.699 0 013.69 3.708zm-5.13 17.064c0-5.796-2.592-10.494-2.592-10.494-2.592-1.944-5.058-1.89-5.058-1.89l-.252.288c3.06.936 4.482 2.286 4.482 2.286-4.276-2.343-9.298-2.344-13.446-.522-.666.306-1.062.522-1.062.522s1.494-1.422 4.734-2.358l-.18-.216s-2.466-.054-5.058 1.89c0 0-2.592 4.698-2.592 10.494 0 0 1.512 2.61 5.49 2.736 0 0 .666-.81 1.206-1.494-2.286-.684-3.15-2.124-3.15-2.124.265.185.701.426.738.45 3.038 1.701 7.354 2.259 11.232.63a10.3 10.3 0 002.07-1.062s-.9 1.476-3.258 2.142c.54.684 1.188 1.458 1.188 1.458 3.978-.126 5.508-2.736 5.508-2.736z"
      />
    </svg>
  )
}

export default Discord