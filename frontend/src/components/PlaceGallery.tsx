import {useState} from "react";


export default function PlaceGallery({
  photo
}:any) {

  const [showAllPhotos,setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
    
      // <div className="absolute inset-0 bg-black text-white min-h-screen">
      //   <div className="bg-black p-8 grid gap-4">
      //     <div>
      //       <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
      //       <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      //           <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
      //         </svg>
      //         Close photos
      //       </button>
      //     </div>
      //     <div>
      //     <img src={photo} alt=""/>
      //     </div>
      //     <div>
      //     <img src={photo} alt=""/>
      //     </div>
      //     <img src={photo} alt=""/>
      //     <img src={photo} alt=""/>
      //     <img src={photo} alt=""/>
      //     {place?.photos?.length > 0 && place.photos.map((photo:any) => (
      //       <div>
      //         <img src={photo} alt=""/>
      //         <img src={photo} alt=""/>
      //       </div>
      //     ))}
      //   </div>
      // </div>



      <div className="relative ">
      <div className="grid gap-1 grid-cols-[500px_240px_240px] rounded-3xl overflow-hidden justify-center">
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full  max-h-[400px]" src={photo} alt=""/>
          {/* {place.photos?.[0] && (
            <div>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={place.photos[0]} alt=""/>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={photo} alt=""/>
            </div>
          )} */}
        </div>
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>

          {/* {place.photos?.[1] && (
            // <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={place.photos[1]} alt=""/>
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover " src={photo} alt=""/>
          )} */}
          {/* <div className="overflow-hidden">
          <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2 w-full" src={photo} alt=""/>
          <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2 w-full" src={photo} alt=""/>
            {place.photos?.[2] && (
              // <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={place.photos[2]} alt=""/>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={photo} alt=""/>
            )}
          </div> */}
        </div>
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px] " src={photo} alt=""/>
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>

        </div>
      </div>
      <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
        Show more photos
      </button>
    </div>

      
    );
  }

  return (
    <div className="relative ">
      <div className="grid gap-1 grid-cols-[500px_240px_240px] rounded-3xl overflow-hidden justify-center">
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full  max-h-[400px]" src={photo} alt=""/>
          {/* {place.photos?.[0] && (
            <div>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={place.photos[0]} alt=""/>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={photo} alt=""/>
            </div>
          )} */}
        </div>
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>

          {/* {place.photos?.[1] && (
            // <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full" src={place.photos[1]} alt=""/>
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover " src={photo} alt=""/>
          )} */}
          {/* <div className="overflow-hidden">
          <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2 w-full" src={photo} alt=""/>
          <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2 w-full" src={photo} alt=""/>
            {place.photos?.[2] && (
              // <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={place.photos[2]} alt=""/>
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={photo} alt=""/>
            )}
          </div> */}
        </div>
        <div className="max-h-[400px]">
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px] " src={photo} alt=""/>
        <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover w-full max-h-[200px]" src={photo} alt=""/>

        </div>
      </div>
      <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
        Show more photos
      </button>
    </div>
  );
}