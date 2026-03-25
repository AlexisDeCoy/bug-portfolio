import { useNavigate } from "react-router-dom";
import '../styles/GalleryItem.css'

const PrintGalleryItem = (props) => {
    const navigate = useNavigate();
    const item = props.item;

    return (
        <div className="print-gallery-item" onClick={() => navigate(`/prints/${item.id}`)}>
            <div className="gallery-image">
                <div className="gallery-image-overlay" />
                <div className="gallery-image-title">{item.title}</div>
                <img src={item.thumbnail.src} alt={item.thumbnail.alt} />
            </div>
        </div>
    )
}

export default PrintGalleryItem