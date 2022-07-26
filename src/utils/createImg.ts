import { chaptersName } from '../enum/chapters';

const picture =
  'https://media.istockphoto.com/photos/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-picture-id1213516345?k=20&m=1213516345&s=612x612&w=0&h=_XUSwcrXe5HjI2QEby0ex6Tl1fB_YJUzUU8o2cUt0YA=';

const picture2 =
  'https://media.istockphoto.com/photos/happy-dog-on-yellow-background-picture-id1031307536?k=20&m=1031307536&s=170667a&w=0&h=Kd3gAM3cm8whGhGd2jfF7D6L-1TnyMeLRiRKwxfc26I=';

const picture3 = 'https://cache.desktopnexus.com/thumbseg/1936/1936604-bigthumbnail.jpg';
const picture4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCyTMdH-t7fXT9X5gp-oLL6nbNOSPW-RvLw&usqp=CAU';
const picture5 = 'https://t3.ftcdn.net/jpg/04/23/07/18/360_F_423071856_JIf4hUWaBPP4Rzd3BUEQXgJntTsI1l4A.jpg';
const picture6 = 'https://t4.ftcdn.net/jpg/03/28/88/41/360_F_328884184_zcbmGh4NlFLhrRWj83fTDQsQLYY6bbvQ.jpg';
const picture7 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThK2ynmVJMGAUFsBSGiO-kPsJ6vp4fiGdsI0Q51_zq2J10xqvUz9Yff7U35vKNnzAAvOA&usqp=CAU';

const arrayImgs: string[] = [picture, picture2, picture3, picture4, picture5, picture6, picture7];

export const createImg = (text: chaptersName) => {
  let img = '';
  // const i = Math.floor(Math.random() * arrayImgs.length);
  // console.log('number', i);
  if (text === chaptersName.MASTER) {
    img = 'https://img.freepik.com/premium-photo/dog-gets-hair-cut-pet-spa-grooming-salon_170532-240.jpg';
    // img = arrayImgs[i];
    return img;
  }
  if (text === chaptersName.SHOP) {
    img =
      'https://st2.depositphotos.com/1146092/6986/i/600/depositphotos_69864811-stock-photo-dog-with-shopping-cart.jpg';
    // img = arrayImgs[i];
    return img;
  }
  if (text === chaptersName.CLINIC) {
    img =
      'https://img.freepik.com/free-photo/puppy-dog-border-collie-paws-stethoscope-isolated-yellow-background-little-dog-reception-veterinary-doctor-vet-clinic-pet-health-care-animals-concept_80942-719.jpg';
    // img = arrayImgs[i];
    return img;
  }
};
