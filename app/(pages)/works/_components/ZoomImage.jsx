import { useState, useRef, useEffect } from "react";

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dimensions, setDimensions] = useState({ width: "auto", height: "auto" });
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight,
      });
    }
  }, []);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const updatePosition = (event) => {
    if (!containerRef.current || !isZoomed) return;

    let clientX, clientY;

    // Handle both mouse and touch events
    if (event.touches) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden border border-gray-300 transition-all ease-linear"
      onClick={toggleZoom}
      onMouseMove={updatePosition}
      onTouchMove={updatePosition}
      style={{
        width: dimensions.width === "auto" ? "100%" : dimensions.width, // Ensure full width on mobile
        height: dimensions.height === "auto" ? "auto" : dimensions.height, // Allow height to adjust
        maxWidth: "100%", // Prevent overflow on small screens
        cursor: isZoomed ? "zoom-out" : "zoom-in",
      }}
    >
      <img
        ref={imageRef}
        src={src.startsWith("http") ? src : src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          transform: isZoomed ? `scale(2)` : "scale(1)",
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
};

export default ZoomableImage; 