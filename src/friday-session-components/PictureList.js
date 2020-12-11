import Picture from "./Picture";

// Expect to receive a prop called "imageUrls"
// which will be an array of strings that should be URLs
const PictureList = ({ imageUrls }) => {
    return (
        <ul>
            {imageUrls.map((imageUrl, i) => {
                return <li key={i}><Picture imgUrl={imageUrl} /></li>
            })}
        </ul>
    );
};

export default PictureList;