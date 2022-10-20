import React, { FC, useEffect } from 'react';
import { MessagesScreenProps } from './type';
import { ChatListItem } from '../../components/ChatItem/ChatItem';
import { images } from '../../consts/consts';
import { FlatList, SafeAreaView } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MessagesNavigationName } from '../../enum/navigation';
import { fetchAllUsersAction } from '../../store/sagas/sagaActions/fetchAllUsers';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/selectors/userSelector';
import { UserType } from '../../store/actions/userAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { Loader } from '../../components/Loader/Loader';
import { getAppStatus } from '../../store/selectors/appSelector';

dayjs.extend(relativeTime);

export const MessagesScreen: FC<MessagesScreenProps> = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, []);

  const users: UserType[] = useSelector(getAllUsers);

  const statusApp = useSelector(getAppStatus);

  const onChatItemPress = (user: UserType) => {
    navigation.navigate(MessagesNavigationName.CHAT, {
      id: user.userId,
      name: user.userName,
      avatar: images.avatar,
    });
  };

  // const chatsCollection = collection(db, 'chats');
  // const [messages, setMessages] = useState<ChatType[]>([]);

  const renderItem = ({ item }: { item: UserType }) => {
    const { userName, userId } = item;
    // const chat = doc(chatsCollection, `${userId}`);
    // const messagesCollection = collection(chat, 'messages');

    // const q = query(messagesCollection, orderBy('createdAt', 'desc'));

    // const unsubscribe = onSnapshot(q, snapshot =>
    //   setMessages(
    //     snapshot.docs.map(doc => ({
    //       _id: doc.data()._id,
    //       createdAt: doc.data().createdAt.toDate(),
    //       text: doc.data().text,
    //       user: doc.data().user,
    //     })),
    //   ),
    // );

    return (
      <ChatListItem
        name={userName}
        avatar={images.avatar}
        onPress={() => onChatItemPress(item)}
        time={'07:00'}
        message={'hello'}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <FlatList data={users} renderItem={renderItem} style={{ flex: 1 }} />
      )}
    </SafeAreaView>
  );
};
