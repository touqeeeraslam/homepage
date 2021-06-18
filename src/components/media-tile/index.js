import {
	 extractImagePathFromThumbnail
} from '../../utils/helper';


const MediaTiles = (props) => {
	const { list , assetType } = props;
  const { layoutTitles } = list;
  return layoutTitles.titles.map((row) => {
    return (
      <div>
        <img
          className='img'
          src={extractImagePathFromThumbnail(row, assetType)}
          alt='logo'
        />
      </div>
    );
  });
};


export default MediaTiles;