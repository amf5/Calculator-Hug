const AdSlot = ({ position = "default" }) => {
    return (
        <div
            className={`ad-slot ad-${position}`}
            aria-label="Advertisement"
        >
            <span>Advertisement</span>
        </div>
    );
};

export default AdSlot;