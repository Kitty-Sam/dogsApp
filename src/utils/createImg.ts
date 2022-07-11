import {chaptersName} from '../enum/chapters';

export const createImg = (text: chaptersName) => {
  let img = '';
  if (text === chaptersName.MASTER) {
    img =
      'https://img.freepik.com/premium-photo/dog-gets-hair-cut-pet-spa-grooming-salon_170532-240.jpg';
    return img;
  }
  if (text === chaptersName.SHOP) {
    img =
      'https://st2.depositphotos.com/1146092/6986/i/600/depositphotos_69864811-stock-photo-dog-with-shopping-cart.jpg';
    return img;
  }
  if (text === chaptersName.CLINIC) {
    img =
      'https://img.freepik.com/free-photo/puppy-dog-border-collie-paws-stethoscope-isolated-yellow-background-little-dog-reception-veterinary-doctor-vet-clinic-pet-health-care-animals-concept_80942-719.jpg';
    return img;
  }
};
