import { MessagesNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { MessageStackParamList } from '../../navigation/MessageStack/type';

export type MessagesScreenProps = StackScreenNavigationProps<MessagesNavigationName.MESSAGES, MessageStackParamList>;
