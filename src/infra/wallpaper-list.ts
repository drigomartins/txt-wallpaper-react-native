import { WallpaperItem } from '@/domain';

import { bangChan } from './bang-chan';
import { felix } from './felix';
import { hyunjin } from './hyunjin';
import { leeKnow } from './lee-know';
import { stayKids } from './stray-kids';
import { hanJisung } from './han-jisung';
import { jeongin } from './jeongin';
import { seungmin } from './seungmin';
import { changbin } from './changbin';
import { woojin } from './woojin';

export const wallpaperList: WallpaperItem[] = [
  ...stayKids,
  ...hyunjin,
  ...felix,
  ...bangChan,
  ...leeKnow,
  ...hanJisung,
  ...jeongin,
  ...seungmin,
  ...changbin,
  ...woojin,
];
