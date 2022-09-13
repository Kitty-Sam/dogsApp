import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import OcticonIcon from 'react-native-vector-icons/Octicons';

export const getIconFont = (type: string) => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'material':
      return MaterialIcon;
    case 'evil':
      return EvilIcon;
    case 'feather':
      return Feather;
    case 'ant':
      return AntDesign;
    case 'simpleLine':
      return SimpleLineIcon;
    case 'zocial':
      return ZocialIcon;
    case 'foundation':
      return FoundationIcon;
    case 'fa5':
      return FAIcon5;
    case 'fa':
      return FAIcon;
    case 'ionicon':
      return Ionicon;
    case 'materialCommunity':
      return MaterialCommunityIcon;
    case 'entypo':
      return EntypoIcon;
    case 'octicon':
      return OcticonIcon;
    default:
      return FAIcon;
  }
};
