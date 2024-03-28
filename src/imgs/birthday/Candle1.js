import Wick from "./Wick";

export default function Candle1({ lit, onClick }) {
  return (
    <div className="candle-1">
      <Wick candle='one' lit={lit} onClick={onClick} />
      <svg id='candle-one-svg' className="candle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* <filter id="candle-shadow" width="100" height="100">
            <feOffset in="SourceAlpha" dx="0" dy="0" />
            <feGaussianBlur stdDeviation={1} />
            <feBlend in="SourceGraphic" in2="offOut" />
          </filter> */}
        </defs>
        <path d="M 26.998 21.157 L 64.879 6.95 L 63.422 79.169 L 77.991 88.64 C 61.478 92.214 43.944 90.957 28.455 85.088 L 43.024 76.801 L 44.481 23.525 L 26.998 21.157 Z" fill='#fffffa' stroke='#b00' strokeWidth={4} strokeLinejoin="round"></path>
        <path d="M 37.193 25.063 L 38.812 27.896 L 42.707 28.242 L 39.812 30.339 L 40.601 33.386 L 37.193 31.849 L 33.785 33.386 L 34.574 30.339 L 31.679 28.242 L 35.574 27.896 Z" fill='pink' transform-origin='35.621px 27.896px' transform="matrix(0.995297, -0.096872, 0.146001, 0.990515, 15.701494, -9.265601)"></path>
        <path d="M 37.193 25.004 L 38.791 27.873 L 42.638 28.224 L 39.779 30.348 L 40.558 33.434 L 37.193 31.878 L 33.828 33.434 L 34.607 30.348 L 31.748 28.224 L 35.595 27.873 Z" fill='blue' transform-origin='35.621px 27.896px' transform="matrix(0.96976, -0.24406, 0.358623, 0.940928, 16.156863, 30.646493)"></path>
        <path d="M 37.193 25.004 L 38.791 27.873 L 42.638 28.224 L 39.779 30.348 L 40.558 33.434 L 37.193 31.878 L 33.828 33.434 L 34.607 30.348 L 31.748 28.224 L 35.595 27.873 Z" fill='purple' transform-origin='35.621px 27.896px' transform="matrix(0.96976, -0.24406, 0.358623, 0.940928, 10.551042, 51.989541)"></path>
        <path d="M 37.193 24.966 L 38.779 27.859 L 42.594 28.212 L 39.758 30.354 L 40.531 33.465 L 37.193 31.896 L 33.855 33.465 L 34.628 30.354 L 31.792 28.212 L 35.607 27.859 Z" fill='green' transform-origin='35.621px 27.896px' transform="matrix(0.952689, 0.303946, -0.439422, 0.909467, 17.458917, 13.345548)"></path>
      </svg>
    </div>
  )
}