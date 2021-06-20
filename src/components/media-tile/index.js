import { extractImagePathFromThumbnail } from '../../utils/helper';
import Image from '../image';

const MediaTiles = (props) => {
  const { key, list, assetType } = props;
  const { layoutTitles } = list;
  return layoutTitles.titles.map((row) => {
    return (
      <div>
        <Image
          src={extractImagePathFromThumbnail(row, assetType)}
          alt={key}
          className={'hero-image'}
        />
      </div>
    );
  });
};

export default MediaTiles;
