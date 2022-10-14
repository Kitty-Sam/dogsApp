import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Image, SafeAreaView, View } from 'react-native';
import { getMapMarks } from '../../store/selectors/mapMarksSelector';
import { useDispatch, useSelector } from 'react-redux';
import { Actionsheet, useDisclose } from 'native-base';
import { images } from '../../consts/consts';
import { fetchMapMarksAction } from '../../store/sagas/sagaActions/fetchMapMarks';

export const MapScreen = () => {
  const [title, setTitle] = useState<string>('');

  const { isOpen, onOpen, onClose } = useDisclose();

  const markers = useSelector(getMapMarks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMapMarksAction());
  }, []);

  const onOpenMapMark = (title: string) => {
    setTitle(title);
    onOpen();
  };

  return (
    <MapView
      style={{ flex: 1 }}
      region={{ latitude: 53.893009, longitude: 27.567444, latitudeDelta: 0.1, longitudeDelta: 0.05 }}
      showsUserLocation
      minZoomLevel={2}
      maxZoomLevel={15}
      followsUserLocation
    >
      {markers &&
        markers.map(mark => (
          <View key={mark.title}>
            <Marker
              coordinate={mark.coordinate}
              pinColor={mark.pinColor}
              // title={mark.title}
              // description={mark.description}
              onPress={() => onOpenMapMark(mark.title)}
            />
            {mark.title === title ? (
              <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content style={{ height: 200 }}>
                  <Actionsheet.Item>
                    {mark.title} {mark.description}
                  </Actionsheet.Item>
                  <View style={{ position: 'absolute', right: 24, bottom: 120 }}>
                    <Image source={{ uri: images.avatar }} style={{ width: 50, height: 50 }} />
                  </View>
                </Actionsheet.Content>
              </Actionsheet>
            ) : (
              <></>
            )}
          </View>
        ))}
    </MapView>
  );
};
