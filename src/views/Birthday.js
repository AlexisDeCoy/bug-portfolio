import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'
import Candle2 from '../imgs/birthday/Candle2'
import Candle1 from '../imgs/birthday/Candle1'
import Lighter from '../imgs/birthday/Lighter'
import Beer from '../imgs/birthday/Beer';
import '../documents/birthday.css'


const Birthday = () => {
    const [lit2, setLit2] = useState(false);
    const [lit1, setLit1] = useState(false);
    const [drag, setDrag] = useState(false);
    const [lighterOpen, setLighterOpen] = useState(false);
    const [lighterLit, setLighterLit] = useState(false);
    const [beerNum, setBeerNum] = useState(0)
    const [beerEnd, setBeerEnd] = useState(false);

    useEffect(() => {
        if (drag) dragElement(document.getElementById('lighter'));
    }, [drag])

    function newBeer() {
        setBeerNum(beerNum + 1);
    }

    function endBeer() {
        setBeerEnd(true);
    }

    function dragElement(lighter) {
        const lighterHeight = lighter.clientHeight
        const lighterWidth = lighter.clientWidth;
        let mouseXOffset, mouseYOffset

        let wicks = document.getElementsByClassName('wick')
        let wickRangeX = [[], []], wickRangeY = [[], []]
        for (let i = 0; i < 2; i++) {
            let wickArea = wicks[i].getBoundingClientRect();
            let wickX = wickArea.right - wickArea.left
            let wickY = wickArea.bottom - wickArea.top
            wickRangeX[i][0] = wickArea.left + wickX / 4
            wickRangeX[i][1] = wickArea.right - wickX / 4
            wickRangeY[i][0] = wickArea.top + wickY / 4
            wickRangeY[i][1] = wickArea.bottom - wickY / 4
        }

        lighter.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            mouseXOffset = e.clientX - lighter.offsetLeft
            mouseYOffset = lighter.offsetTop + lighterHeight - e.clientY
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            const newLeft = e.clientX - mouseXOffset;
            const newBottom = window.innerHeight - e.clientY - mouseYOffset;
            lighter.style.left = newLeft + 'px';
            lighter.style.bottom = newBottom + 'px';
            const flameX = lighterWidth * 0.3 + newLeft;
            const flameY = lighter.offsetTop + lighterHeight * 0.25;

            if (wickRangeX[0][0] <= flameX && flameX <= wickRangeX[0][1]) {
                if (wickRangeY[0][0] <= flameY && flameY <= wickRangeY[0][1]) {
                    setLit2(true);
                }
            }
            if (wickRangeX[1][0] <= flameX && flameX <= wickRangeX[1][1]) {
                if (wickRangeY[1][0] <= flameY && flameY <= wickRangeY[1][1]) {
                    setLit1(true);
                }
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function light(candleNum) {
        candleNum === 2 ? setLit2(true) : setLit1(true)
    }

    function openLighter() {
        setLighterOpen(true);
    }

    function lightLighter() {
        setLighterLit(true);
        setDrag(true)
    }

    useEffect(() => {
        document.title = 'Happy Birthday!!';
    }, []);

    useEffect(() => {
        if (lit2 && lit1 && beerNum === 0) setBeerNum(1)
    }, [lit2, lit1, beerNum]);

    return (
        <div className='body'>
            <main>
                <div className="cake-container">
                    <Candle2 lit={lit2} onClick={() => { light(2) }} />
                    <Candle1 lit={lit1} onClick={() => { light(1) }} />
                    <Lighter open={lighterOpen} openLighter={openLighter} lit={lighterLit} lightLighter={lightLighter} />
                    {lit2 && lit1 ? <div className='dim' /> : ''}
                    {beerNum > 0 ? <Beer key={beerNum} end={endBeer} newBeer={newBeer} /> : ''}
                    {beerEnd ?
                        <>
                            <h1 className='hb'>Happy Birthday!</h1>
                            <h1 className='b-num'>#{beerNum}</h1>
                        </>
                        : ''}
                </div>
            </main>
        </div>
    )
}

export default Birthday