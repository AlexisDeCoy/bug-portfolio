export default function Lighter({ open, openLighter, lit, lightLighter }) {
    const topClasses = open ? ' open lighter-top' : 'lighter-top';
    return (
        <div id="lighter">
            <svg id='lighter-svg' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" onClick={open ? lit ? undefined : lightLighter : openLighter}>
                <defs>
                    <linearGradient id="lighter-gradient" x1='0' x2='100%'>
                        <stop offset="0%" stopColor="#717376" />
                        <stop offset="10%" stopColor="#dce0e6" />
                        <stop offset="90%" stopColor="#93969a" />
                        <stop offset="100%" stopColor="#6f7174" />
                    </linearGradient>
                    <filter id="lighter-flame" x='-50%' y='-50%' width="200%" height="200%">
                        <feGaussianBlur id='outer-blur' stdDeviation='5' />
                        <feBlend in='SourceGraphic' />
                        <feBlend in="outer-blur" />
                    </filter>
                </defs>
                {lit ?
                    <>
                        <path fill='red' className="lighter-outer" filter='url(#lighter-flame)' d="M 50 100 A 72 72 0 0 1 60 25 A 72 72 0 0 1 70 100 Z"></path>
                        <path fill='orange' className="lighter-inner" filter='url(#lighter-flame)' d="M 55 100 A 72 72 0 0 1 60 40 A 72 72 0 0 1 65 100 Z"></path>
                    </>
                    : ''}
                <g filter="url(#demo2)">
                    <path
                        fill='url(#lighter-gradient)'
                        fillRule="evenOdd"
                        d="M 40 100 L 40 70 L 80 70 L 80 100 L 40 100 Z
                            M 49 75 C 49 76.657 47.657 78 46 78 C 44.343 78 43 76.657 43 75 C 43 73.343 44.343 72 46 72 C 47.657 72 49 73.343 49 75 Z
                            M 63 75 C 63 76.657 61.657 78 60 78 C 58.343 78 57 76.657 57 75 C 57 73.343 58.343 72 60 72 C 61.657 72 63 73.343 63 75 Z
                            M 77 75 C 77 76.657 75.657 78 74 78 C 72.343 78 71 76.657 71 75 C 71 73.343 72.343 72 74 72 C 75.657 72 77 73.343 77 75 Z
                            M 56 85 C 56 86.657 54.657 88 53 88 C 51.343 88 50 86.657 50 85 C 50 83.343 51.343 82 53 82 C 54.657 82 56 83.343 56 85 Z
                            M 70 85 C 70 86.657 68.657 88 67 88 C 65.343 88 64 86.657 64 85 C 64 83.343 65.343 82 67 82 C 68.657 82 70 83.343 70 85 Z
                            M 49 95 C 49 96.657 47.657 98 46 98 C 44.343 98 43 96.657 43 95 C 43 93.343 44.343 92 46 92 C 47.657 92 49 93.343 49 95 Z
                            M 63 95 C 63 96.657 61.657 98 60 98 C 58.343 98 57 96.657 57 95 C 57 93.343 58.343 92 60 92 C 61.657 92 63 93.343 63 95 Z
                            M 77 95 C 77 96.657 75.657 98 74 98 C 72.343 98 71 96.657 71 95 C 71 93.343 72.343 92 74 92 C 75.657 92 77 93.343 77 95 Z">
                    </path>
                    <ellipse fill='#111' cx="100" cy="100" rx="3" ry="3"></ellipse>
                    <path fill='url(#lighter-gradient)' d="M 20 100 L 100 100 L 100 188 A 11 11 0 0 1 90 198 L 30 198 A 11 11 0 0 1 20 188 Z"></path>
                    <ellipse fill='#111' cx="31" cy="88" rx="9" ry="9"></ellipse>
                    <path fill='url(#lighter-gradient)' d="M 40 98 L 30 96 A 17 10 0 0 1 28 82 L 40 72 Z"></path>
                    <ellipse stroke="#aaa" fill='#777' cx="31" cy="88" rx="2" ry="2"></ellipse>
                    <path className={topClasses} fill='url(#lighter-gradient)' d="M 20 100 L 20 70 A 11 11 0 0 1 30 60 L 90 60 A 11 11 0 0 1 100 70 L 100 100 Z"></path>
                </g>
            </svg>
        </div>
    )
}