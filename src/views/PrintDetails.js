import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';
import data from '../documents/prints.json';

const PrintDetails = () => {
    const { id } = useParams();
    const item = data[id];

    useEffect(() => {
        document.title = item.title;
    }, [item.title]);

    return (
        <div className='body'>
            <Nav />

            <div className="details-container-center">
                <div className='label' id="item-title">{item.title}</div>
                <div className='details-info' id='item-types'>
                    {item.types.map((t, i) => <span key={i}>{i > 0 ? ", " : ""}{t}</span>)}
                </div>
                <div className='details-info' id='item-dims'>
                    {item.dimensions.foldable && "Flat: "}
                    {item.dimensions.height && `${item.dimensions.height}"`}
                    {item.dimensions.width && ` x ${item.dimensions.width}"`}
                    {item.dimensions.depth && ` x ${item.dimensions.depth}"`}
                    {item.dimensions.foldable &&
                        `, Folded: ${item.dimensions.fHeight}" x ${item.dimensions.fWidth}" x ${item.dimensions.fDepth}"`
                    }
                </div>
                <div className='details-year'>{item.year}</div>
            </div>

            <div className="details-spacer" />

            {item.images.map((img, i) =>
                <div className="details-img-container" key={i}>
                    <img className="details-img" src={img.src} alt={img.alt} />
                </div>
            )}

            <footer />
        </div>
    )
}

export default PrintDetails;