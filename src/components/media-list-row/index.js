import LazyLoad from 'react-lazyload';
import OwlCarousel from 'react-owl-carousel';
import { ASSETS_TYPE } from '../../utils/helper';
import MediaTiles from '../media-tile';
import './index.css';

const MediaListRow = (props) => {
  const { key, row } = props;
  return (
    <LazyLoad once height={200} offset={[-100, 0]}>
      <div className=''>
        <h2>
          <div className='heading'>{row?.title}</div>
        </h2>
        <div className='media-list-carasoul'>
          <OwlCarousel
            items={7}
            className=''
            margin={10}
            dots={false}
            stagePadding={36}
            lazyLoad
          >
            <MediaTiles
              key={key}
              list={row}
              assetType={ASSETS_TYPE.LAYOUT_THUMBNAIL}
            />
          </OwlCarousel>
        </div>
      </div>
    </LazyLoad>
  );
};

export default MediaListRow;
