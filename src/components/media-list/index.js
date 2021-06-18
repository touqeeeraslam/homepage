import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import {
  ASSETS_TYPE, filterModuleWithType,
  MODULE_TPYES
} from '../../utils/helper';
import MediaTiles from '../media-tile';
import './index.css';

const MediaList = () => {
  // filters data from JSON
  const layouts = filterModuleWithType(MODULE_TPYES.LAYOUT);


  const renderList = () => {
    return layouts.map((row) => {
      return (
        <div className=''>
          <h2>
            <div className='heading'>{row.title}</div>
          </h2>
          <div className='media-list-carasoul'>
            <OwlCarousel
              items={7}
              className=''
              margin={10}
              dots={false}
              stagePadding={36}
            >

              <MediaTiles
                list={row}
                assetType={ASSETS_TYPE.LAYOUT_THUMBNAIL}
              />
              
            </OwlCarousel>
          </div>
        </div>
      );
    });
  };
  return <>{renderList()}</>;
};

export default MediaList;
