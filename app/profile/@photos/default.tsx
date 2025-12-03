import { getPhotos } from "@/services/photos";

async function Photos() {
  const photos = await getPhotos();

  return photos
    .slice(0, 5)
    .map((photo) => <img key={photo.id} src={photo.url} alt={photo.title} />);
}

export default Photos;
