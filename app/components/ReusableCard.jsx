// components/ReusableCard.jsx
import Image from 'next/image';
import Link from 'next/link';

// Define the component and destructure the props it accepts
export default function ReusableCard({ imageUrl, title, bodyText, linkHref, linkText }) {
  return (
    // Outer container for the card: white background, shadow, rounded corners, max width
    <div className="mx-auto bg-white rounded-xl shadow-lg overflow-hidden ">
      {/* Image Container: Uses the dynamic imageUrl prop */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl} 
          alt={title} // Use title as alt text for accessibility
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      {/* Text Content Area */}
      <div className="p-8">
        {/* Heading: Uses the dynamic title prop */}
        <h1 className="block mt-1 text-xl leading-tight font-bold text-gray-900">
          {title}
        </h1>

        {/* Paragraph Text: Uses the dynamic bodyText prop */}
        <p className="mt-4 text-gray-600">
          {bodyText}
        </p>

        {/* Link Button/Text: Uses dynamic linkHref and linkText props */}
        <div className="mt-6">
          <Link href={linkHref}>
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
              {linkText} &gt;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
