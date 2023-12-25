import {View, FlatList} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import {ISeatStatus} from '../../../constants/Types';

import styles from './style';
import Tab from './components/Tab';
import Vagon1 from './components/Vagon1';
import Vagon2 from './components/Vagon2';
import Vagon3 from './components/Vagon3';
import Vagon4 from './components/Vagon4';
import Vagon5 from './components/Vagon5';
import Vagon6 from './components/Vagon6';

const SEAT_STATUS: ISeatStatus[] = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
];

const Home = ({route}: any) => {
  const {type} = route?.params ?? {};

  const [activeIndex, setActiveIndex] = useState<number>(type || 1);
  const flatListRef = useRef<FlatList | null>(null);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({index: index - 1, animated: true});
  };

  // Update activeIndex when the type prop changes
  useEffect(() => {
    if (type !== undefined) {
      setActiveIndex(type);
      flatListRef.current?.scrollToIndex({index: type - 1, animated: true});
    }
  }, [type]);

  const renderVagon = (index: number) => {
    switch (index) {
      case 1:
        return <Vagon1 activeIndex={activeIndex}/>;
      case 2:
        return <Vagon2 activeIndex={activeIndex}/>;
      case 3:
        return <Vagon3 activeIndex={activeIndex}/>;
      case 4:
        return <Vagon4 activeIndex={activeIndex}/>;
      case 5:
        return <Vagon5 activeIndex={activeIndex}/>;
      case 6:
        return <Vagon6 activeIndex={activeIndex}/>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Tab activeIndex={activeIndex} changeActiveIndex={changeActiveIndex} />

      <FlatList
        ref={ref => (flatListRef.current = ref)}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => item.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index =
            Math.round(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            ) + 1;
          setActiveIndex(index);
        }}
        renderItem={({item}) => renderVagon(item)}
      />
    </View>
  );
};

export default Home;
