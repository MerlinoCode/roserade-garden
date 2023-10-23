import React from 'react'

const Airport = (props) => {
  return (
    <svg width={props.w} height={props.h} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect id="Airport" width={props.w} height={props.h} fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_50_51" transform="scale(0.01)"/>
        </pattern>
        <image id="image0_50_51" width={props.w} height={props.h} xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  )
}

export default Airport