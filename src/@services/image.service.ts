import {CLIENT_ID, CoreAxiosInstance} from './../config/core-axios';

import {IFImage} from './image.IF';

// https://api.unsplash.com/photos/?client_id=8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6&per_page=16

const END_POINT = `photos/?${CLIENT_ID}`;

export const ImageService = {
  filterPhotos(option: IFImage): any {
    return CoreAxiosInstance.get(`${END_POINT}&per_page=${option.page || ''}`);
  },
};
