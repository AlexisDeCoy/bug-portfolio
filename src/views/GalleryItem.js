import React from "react";
import { useNavigate } from "react-router-dom";
import { PrintData } from "../documents/PrintData";
import PrintImages from "../documents/PrintImages";

const GalleryItem = (props) => {
    const navigate = useNavigate();
    const index = props.index;
    const title = PrintData[index].title;
    const img = PrintImages[PrintData[index].img];

    return (
        <div className="gallery-item" onClick={() => navigate(`/prints/${index}`)}>
            <div className="gallery-image">
                <div className="gallery-image-overlay" />
                <div className="gallery-image-title">{title}</div>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default GalleryItem