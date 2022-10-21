import React, { FC } from 'react';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { FriendsScreenProps } from './type';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getAllUsers, getFriendsIds } from '../../store/selectors/userSelector';
import { UserType } from '../../store/actions/userAC';
import { FriendsNavigationName } from '../../enum/navigation';

export const FriendsScreen: FC<FriendsScreenProps> = props => {
  const { navigation } = props;

  const friendsIds = useSelector(getFriendsIds);

  const friendsIdsResult = friendsIds.map((el: string) => Object.values(el)).flat();

  const users: UserType[] = useSelector(getAllUsers);

  return (
    <View style={{ margin: 12 }}>
      <HeaderTextItem>Friends List</HeaderTextItem>
      <FlatList
        data={users.filter(el => friendsIdsResult.includes(el.userId))}
        renderItem={({ item }) => (
          <Text
            onPress={() => {
              navigation.navigate(FriendsNavigationName.FRIEND_PROFILE, {
                id: item.userId,
                name: item.userName,
              });
            }}
          >
            {item.userName}
          </Text>
        )}
      />
    </View>
  );
};
