export default function Wick({ candle, lit, onClick }) {
    return (
        <svg id={'wick ' + candle} className={'wick ' + candle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id={"stripes-" + candle} patternTransform="rotate(45)" width="100%" height="10" x="0" y="0" patternUnits="userSpaceOnUse">
                    <g>
                        <rect x="0" y="0" width="100%" height="10" fill={`url(#wick-gradient-${candle})`}></rect>
                    </g>
                </pattern>
                <filter id={"wick-shadow-" + candle} width="16" height="51">
                    <feOffset in="SourceAlpha" dx="0" dy="0" />
                    <feGaussianBlur stdDeviation={1} />
                    <feBlend in="SourceGraphic" in2="offOut" />
                </filter>
                <filter id={"flame-" + candle} x='-10' width="100" height="100">
                    <feGaussianBlur id='outer-blur' stdDeviation='5' />
                    <feBlend in='SourceGraphic' />
                    <feBlend in="outer-blur" />
                </filter>
                <linearGradient id={"wick-gradient-" + candle} x1='0' x2='100%' gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#947053" />
                    <stop offset="10%" stopColor="#b6a08d" />
                    <stop offset="50%" stopColor="#d0c5c3" />
                    <stop offset="90%" stopColor="#b6a08d" />
                    <stop offset="100%" stopColor="#947053" />
                </linearGradient>
            </defs>
            <rect onClick={onClick} x="43" y="47" width="14" height="50" fill={`url(#stripes-${candle})`} filter={`url(#wick-shadow-${candle})`} stroke='none'></rect>
            {lit ?
                <>
                    <path id={'outer' + candle} className='outer' fill='red' filter={`url(#flame-${candle})`} d="M 50 75 A 24 28 0 0 1 25 45 A 22 22 0 0 1 36 28 A 30 30 0 0 0 50 4 A 45 45 0 0 0 64 38 A 22 22 0 0 1 50 75Z"></path>
                    <path className='inner' filter={`url(#flame-${candle})`} fill='orange' d="M 50 66 A 16 18 0 0 1 38 45 A 18 18 0 0 1 42 38 A 30 30 0 0 0 51 24 A 35 35 0 0 0 60 43 A 16 16 0 0 1 50 66 Z" ></path>
                </>
                : ''}
        </svg >
    );
}