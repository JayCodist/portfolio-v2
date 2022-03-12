import { useEffect, useState } from "react";

const preloadImage: (imageUrl: string) => Promise<any> = imageUrl =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = resolve;
    img.onerror = evt => reject((evt as Event).target);
  });

/**
 * Custom hook for prefetching assets on a page
 * @param imageUrls Array of image urls
 * @returns boolean indicating if all images are loaded
 */
const useAssetsReady: (imageUrls: string[]) => boolean = imageUrls => {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const handleAssetsPreload = async () => {
      try {
        const responses = imageUrls.map(asset => preloadImage(asset));
        await Promise.all(responses);
        setAllLoaded(true);
      } catch (error) {
        console.error("Unable to load assets: ", error);
        setAllLoaded(true); // Proceed anyway
      }
    };

    handleAssetsPreload();
  }, [imageUrls]);

  return allLoaded;
};

export default useAssetsReady;
