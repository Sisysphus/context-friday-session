import PictureList from "./PictureList";
const NiceBox = ({ imageUrls }) => {
    return (
        <div className="nice-box">
            <PictureList imageUrls={imageUrls} />
        </div>
    );
};

export default NiceBox;