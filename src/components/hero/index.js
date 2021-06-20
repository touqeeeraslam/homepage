import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import {
  filterModuleWithType,
  MODULE_TPYES,
  ASSETS_TYPE,
} from '../../utils/helper';
import MediaTiles from '../media-tile';
import './owl.css';

const Hero = () => {
  // filters data from JSON
  const layouts = filterModuleWithType(MODULE_TPYES.LAYOUT);

  // as layouts array has list on only at first index

  // to extract list on first index
  const [heroList] = layouts;

  return (
    <div className='mb-4'>
      <OwlCarousel
        items={1.9}
        className='owl-carousel owl-theme owl-loaded'
        autoplay
        dots={false}
        lazyLoad
        loop
        center
        margin={10}
        merge
      >
        <MediaTiles list={heroList} assetType={ASSETS_TYPE.HERO_THUMBNAIL} />
      </OwlCarousel>
    </div>
  );
};

export default Hero;
