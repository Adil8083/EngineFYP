import React from 'react';

import SongsModule from '../../components/Singer/SongsModule';
import AppView from '../../components/common/AppView';
import AlbumModule from '../../components/Singer/AlbumModule';

const Music = () => {
  return (
    <AppView>
      <SongsModule />
      <AlbumModule />
    </AppView>
  );
};

export default Music;
