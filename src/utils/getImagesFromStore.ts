import storage from '@react-native-firebase/storage';

export const getImages = async (folder: string, id: string) => {
  const urls = await storage().ref().child(`${id}`).child(folder);
  const res = await urls.listAll();
  const promises = res.items.map(itemRef => itemRef.getDownloadURL());
  const data = await Promise.all(promises);
  return data;
};
