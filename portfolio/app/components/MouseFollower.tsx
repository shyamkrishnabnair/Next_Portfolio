const MouseFollower: React.FC<{ x: number; y: number }> = ({ x, y }) => {
    // We only render this on the client side (after window is defined)
    if (typeof window === 'undefined') return null;

    return (
        <div
            style={{ 
                transform: `translate3d(${x}px, ${y}px, 0)`,
            }}
            // Styling for the glowing circle
            className="fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-300/50 
                       pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
                       transition-transform duration-75 ease-out z-[9999] 
                       opacity-80 mix-blend-add blur-lg"
        />
    );
};

export default MouseFollower