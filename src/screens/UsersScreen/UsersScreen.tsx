import React, { FC, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { UsersScreenProps } from './type';
import { AppButton } from '../../components/Button/AppButton';
import { FriendsNavigationName } from '../../enum/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersAction } from '../../store/sagas/sagaActions/fetchAllUsers';
import { getAllUsers, getFriendsIds } from '../../store/selectors/userSelector';
import { COLORS } from '../../colors/colors';
import { styles } from './style';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { fetchFriendsIdsAction } from '../../store/sagas/sagaActions/fetchFriendsIds';
import { UserType } from '../../store/actions/userAC';
import { addFriendAction } from '../../store/sagas/sagaActions/addFriend';
import { removeFriendAction } from '../../store/sagas/sagaActions/removeFriend';

export const UsersScreen: FC<UsersScreenProps> = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const friendsIds = useSelector(getFriendsIds);

  useEffect(() => {
    dispatch(fetchAllUsersAction());
    dispatch(fetchFriendsIdsAction());
  }, []);

  const users: UserType[] = useSelector(getAllUsers);

  const friendsIdsResult = friendsIds.map((el: any) => Object.values(el)).flat();

  return (
    <View style={{ margin: 12, flex: 1 }}>
      <Text onPress={() => navigation.navigate(FriendsNavigationName.FRIENDS)} style={{ textTransform: 'uppercase' }}>
        my friends
      </Text>
      <FlatList
        data={users.filter(user => user.userId !== currentUserId)}
        renderItem={({ item }) => (
          <View
            style={[
              styles.container,
              {
                backgroundColor: 'white',
              },
            ]}
            // onPress={() =>
            //   navigation.navigate(FriendsNavigationName.FRIEND_PROFILE, {
            //     id: item.userId,
            //     name: item.userName,
            //   })
            // }
          >
            <Text>{item.userName}</Text>

            {friendsIdsResult.includes(item.userId) ? (
              <AppButton
                onPress={() => {
                  dispatch(removeFriendAction({ id: item.userId }));
                }}
                title={'unfollow'}
                backgroundColor={COLORS.buttons.violet}
              />
            ) : (
              <AppButton
                onPress={() => {
                  dispatch(addFriendAction({ id: item.userId }));
                }}
                title={'follow'}
                backgroundColor={COLORS.buttons.violet}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};
