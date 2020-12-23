import React, {useState, useRef} from 'react';
import {View, FlatList, ScrollView} from 'react-native';

import Card from './Card';

const Statistics = ({sportInfo, statistics}) => {
  const [sport, setSport] = useState(sportInfo[0]);
  const scrollView = useRef();
  return (
    <>
      {sport.sport == 'Cricket' ? (
        <FlatList
          data={statistics}
          keyExtractor={(item) => item.identifier}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Card
              tournament={item.tournament}
              total_matches={item.total_matches}
              average_score={item.average_score}
              average_wickets={item.average_wickets}
            />
          )}
        />
      ) : (
        <FlatList
          data={statistics}
          keyExtractor={(item) => item.identifier}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Card
              tournament={item.tournament}
              total_matches={item.total_matches}
              total_goals={item.total_goals}
              club={item.club ? item.club : false}
            />
          )}
        />
      )}
    </>
  );
};

export default Statistics;
