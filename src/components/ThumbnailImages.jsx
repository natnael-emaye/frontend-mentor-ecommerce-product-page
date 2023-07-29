// eslint-disable-next-line react/prop-types
export default function ThumbnailImages({ image }) {
    return (
        <div className="flex-grow">
        <img className="w-full h-[80px] rounded-xl " src={image} />
        </div>
    );
}
