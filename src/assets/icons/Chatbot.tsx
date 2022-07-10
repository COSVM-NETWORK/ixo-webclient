import React from 'react'

const Chatbot = (props: any): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 18}
      viewBox="0 0 18 18"
    >
      <path
        d="M9 10.11A1.12 1.12 0 107.89 9 1.11 1.11 0 009 10.11zm0 2.45a.89.89 0 10-.89-.89.89.89 0 00.89.89zm0-5.35a.89.89 0 10-.89-.89.89.89 0 00.89.89zm0-3.33a.56.56 0 10-.56-.56.56.56 0 00.56.56zM9 1a.35.35 0 10-.34-.36A.35.35 0 009 1zm0 16.7a.35.35 0 10-.34-.34.34.34 0 00.34.34zM1.76 5.16a.34.34 0 00.34-.34.34.34 0 00-.68 0 .34.34 0 00.34.34zm14.48 0a.34.34 0 00.34-.34.34.34 0 10-.68 0 .34.34 0 00.34.34zM1.76 13.51a.34.34 0 00.34-.34.34.34 0 00-.68 0 .34.34 0 00.34.34zm14.48 0a.34.34 0 00.34-.34.34.34 0 10-.68 0 .34.34 0 00.34.34zm-2.41 1.4a.34.34 0 000-.68.34.34 0 100 .68zm0-11.15a.34.34 0 000-.68.34.34 0 000 .68zm-2.37 12.52a.34.34 0 00.34-.34.34.34 0 00-.68 0 .34.34 0 00.34.34zm-4.87 0a.35.35 0 00.34-.34.34.34 0 00-.34-.34.34.34 0 00-.34.34.34.34 0 00.34.34zm0-13.88a.34.34 0 000-.68.34.34 0 000 .68zM4.22 14.91a.34.34 0 10-.34-.34.34.34 0 00.34.34zm0-11.15a.34.34 0 10-.34-.34.34.34 0 00.34.34zm7.24-1.36a.34.34 0 10-.34-.34.34.34 0 00.34.34zm-9.7 8.33a.34.34 0 10-.34-.34.34.34 0 00.34.34zm14.48 0a.34.34 0 10-.34-.34.34.34 0 00.34.34zM1.76 7.94a.34.34 0 10-.34-.34.34.34 0 00.34.34zm14.48 0a.34.34 0 10-.34-.34.34.34 0 00.34.34zM4.08 6.72a.56.56 0 10-.56-.56.56.56 0 00.56.56zM6.54 5.3A.56.56 0 106 4.74a.56.56 0 00.54.56zm7.38 7.1a.57.57 0 00.56-.57.56.56 0 00-1.12 0 .57.57 0 00.56.57zm-9.84 0a.57.57 0 00.56-.57.56.56 0 00-1.12 0 .57.57 0 00.56.57zm9.84-2.84a.56.56 0 00.56-.56.56.56 0 10-1.12 0 .56.56 0 00.56.56zm-9.84 0A.56.56 0 004.64 9a.56.56 0 10-1.12 0 .56.56 0 00.56.56zm9.84-2.84a.56.56 0 10-.56-.56.56.56 0 00.56.56zM9 15.23a.56.56 0 10-.56-.56.56.56 0 00.56.56zm2.46-1.41a.57.57 0 00.56-.57.56.56 0 00-1.12 0 .57.57 0 00.56.57zm-4.92 0a.57.57 0 00.56-.57.56.56 0 10-1.12 0 .57.57 0 00.56.57zm4.92-8.52a.56.56 0 10-.56-.56.56.56 0 00.56.56zm-.14 5.92a.89.89 0 10-.89-.89.89.89 0 00.89.89zm0-2.67a.89.89 0 10-.89-.89.89.89 0 00.89.89zm-4.64 2.67a.89.89 0 10-.89-.89.89.89 0 00.89.89zm0-2.67a.89.89 0 10-.89-.89.89.89 0 00.89.89z"
        fill={props.fill || '#09c3e6'}
      />
    </svg>
  )
}

export default Chatbot
