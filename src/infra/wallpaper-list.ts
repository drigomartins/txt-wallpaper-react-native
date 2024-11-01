import { WallpaperItem } from '@/domain';

import { yeonjun } from './yeonjun';
import { soobin } from './soobin';
import { taehyun } from './taehyun';
import { beomgyu } from './beomgyu';
import { hueningKai } from './huening-kai';
import { tomorrowXtogether } from './tomorrow-x-together';

export const wallpaperList: WallpaperItem[] = [
  ...yeonjun,
  ...soobin,
  ...taehyun,
  ...beomgyu,
  ...hueningKai,
  ...tomorrowXtogether,
];
