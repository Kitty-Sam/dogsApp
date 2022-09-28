import storage from '@react-native-firebase/storage';

export const getGalleryImages = async (folder: string, id: number) => {
  const urls = await storage().ref().child(folder).child(`${id}`);
  const res = await urls.listAll();
  const promises = res.items.map(itemRef => itemRef.getDownloadURL());
  return await Promise.all(promises);
};

export const getAvatars = async (folder: string, currentUserId: string) => {
  const urls = await storage().ref().child(`${currentUserId}`).child(folder);
  const res = await urls.listAll();
  const promises = res.items.map(itemRef => itemRef.getDownloadURL());
  return await Promise.all(promises);
};
