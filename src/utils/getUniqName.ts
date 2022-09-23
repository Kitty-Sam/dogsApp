export const getUniqueFileName = (imagePath: string) => {
  const imageFileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
  return imageFileName;
};
