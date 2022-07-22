import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { database } from '../../utils/getDataBaseURL';
import { UserItem } from '../../components/UserItem/UserItem';
import { getCurrentUserName } from '../../store/selectors/loginSelector';
import { useSelector } from 'react-redux';
import { UserTypeFromFb } from './type';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { styles } from './style';

export const ListItemsScreen = () => {
  const [users, setUsers] = useState<UserTypeFromFb[]>([]);
  const currentUser = useSelector(getCurrentUserName);

  const getUsers = async () => {
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = await database.ref('/users/').once('value');

    if (snapshot) {
      const usersFB: UserTypeFromFb[] = Object.values(snapshot.val());
      setUsers(usersFB);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({ item }: { item: UserTypeFromFb }) => {
    return <UserItem id={item.userId} name={item.userName} />;
  };

  return (
    <SafeAreaView style={styles.root}>
      {users.length === 1 ? (
        <Text>:( You dont have any friends...</Text>
      ) : (
        <FlatList
          data={users.filter(el => el.userName !== currentUser)}
          renderItem={renderItem}
          keyExtractor={item => item.userId}
        />
      )}
    </SafeAreaView>
  );
};
