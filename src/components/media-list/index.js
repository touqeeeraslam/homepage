import React from 'react';
import { filterModuleWithType, MODULE_TPYES } from '../../utils/helper';
import lazyLoad from '../../utils/lazy-loading';

const MediaRow = lazyLoad(() => import('../media-list-row'));

const MediaList = () => {
  // filters data from JSON
  const layouts = filterModuleWithType(MODULE_TPYES.LAYOUT);

  const renderList = () => {
    return layouts.map((row, index) => {
      return <MediaRow key={index} row={row} />;
    });
  };
  return <>{renderList()}</>;
};

export default MediaList;
