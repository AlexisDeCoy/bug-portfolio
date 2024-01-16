import React from "react";
import { useNavigate } from "react-router-dom";
import { DesignData } from "../documents/DesignData";
import DesignImages from "../documents/DesignImages";
import '../styles/GalleryItem.css'

const DesignGalleryItem = (props) => {
    const navigate = useNavigate();
    const index = props.index;
    const title = DesignData[index].title;
    const img = DesignImages[DesignData[index].thumbnail];

    return (
        <div className="design-gallery-item" onClick={() => navigate(`/designs/${index}`)}>
            <div className="gallery-image">
                <div className="gallery-image-overlay" />
                <div className="gallery-image-title">{title}</div>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default DesignGalleryItem