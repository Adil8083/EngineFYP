import React from 'react';
import {View} from 'react-native';
import AppView from '../../components/common/AppView';

import BasicInfo from '../../components/Politician/BasicInfo';
import Education from '../../components/Politician/Education';
import Projects from '../../components/Politician/Projects';

const PoliticianBasicInfo = () => {
  return (
    <AppView>
      <View style={{width: '90%', marginLeft: 20, paddingVertical: 20}}>
        <BasicInfo />
        <Education />
        <Projects />
      </View>
    </AppView>
  );
};

export default PoliticianBasicInfo;
