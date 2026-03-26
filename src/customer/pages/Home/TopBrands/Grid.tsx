import { useAppSelector } from "../../../../Redux Toolkit/Store";

const TopBrand = () => {
  const { homePage } = useAppSelector((store) => store);

  const images = homePage?.homePageData?.grid || [];

  // Fallback demo images if API missing
  const fallbackImages = [
    "https://rukminim2.flixcart.com/www/1060/1460/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60",
    "https://rukminim2.flixcart.com/image/420/420/xif0q/shoe-rack/5/g/s/12-12-0-4-4-tier-shoe-rack-organiser-black-plastic-storage-shelf-original-imahhgjg2waymywh.jpeg?q=60",
    "https://rukminim2.flixcart.com/image/240/240/xif0q/projector/8/z/n/atom-3x-native-fhd-1080p-4k-support-13-0-android-projector-300-original-imahhsp7nfnhjjk6.jpeg?q=60",
    "https://i.imgur.com/y1x8l5m.jpeg",
    "https://i.imgur.com/R4Ql8Qj.jpeg",
    "https://i.imgur.com/ZqeW4V4.jpeg",
  ];

  const finalImages =
    images.length >= 6 ? images.map((i) => i.image) : fallbackImages;

  return (
    <div className="px-5 lg:px-20 py-5">
      {/* Masonry Grid Container */}
      <div
        className="
          columns-2 
          sm:columns-3 
          md:columns-4 
          lg:columns-5 
          gap-4 
          space-y-4
        "
      >
        {finalImages.map((src, index) => (
          <div
            key={index}
            className="
              overflow-hidden 
              rounded-xl 
              shadow-md 
              break-inside-avoid 
              group 
              transition-all 
              duration-300
            "
          >
            <img
              src={src}
              alt={`brand-${index}`}
              className="
                w-full 
                h-auto 
                object-cover 
                transition-transform 
                duration-500 
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrand;
