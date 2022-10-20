import { MessagesNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { MessageStackParamList } from '../../navigation/MessageStack/type';

export type ChatScreenProps = StackScreenNavigationProps<MessagesNavigationName.CHAT, MessageStackParamList>;
