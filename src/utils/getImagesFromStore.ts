import storage from '@react-native-firebase/storage';

export const getImages = async (folder: string, id: string, nickName?: string) => {
  if (nickName) {
    const urls = await storage().ref().child(`${id}`).child(folder).child(`${nickName}`);
    const res = await urls.listAll();
    const promises = res.items.map(itemRef => itemRef.getDownloadURL());
    return await Promise.all(promises);
  } else {
    const urls = await storage().ref().child(`${id}`).child(folder);
    const res = await urls.listAll();
    const promises = res.items.map(itemRef => itemRef.getDownloadURL());
    return await Promise.all(promises);
  }
};
