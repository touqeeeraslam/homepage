/// import json file
import jsonData from '../data/homepage.json';

export const MODULE_TPYES = {
  LAYOUT: 'LAYOUT',
  HERO: 'HERO',
};

export const ASSETS_TYPE = {
  HERO_THUMBNAIL: 'thumb-613x1536',
  LAYOUT_THUMBNAIL: 'thumb-677x474',
};

export function filterModuleWithType(moduleType) {
  const { titles } = jsonData;
  return titles.filter((t) => t.moduleType === moduleType);
}

export function extractImagePathFromThumbnail(fileName, fileType) {
  let Imagepath = fileName.thumbnails[fileType];
  return Imagepath?.url;
}
