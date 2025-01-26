export const headerAnimationDelays = {
  image: 0.2,
  texts: 0.2,
};

export const aboutAnimationDelays = {
  title: headerAnimationDelays.texts * 1.5,
  description: headerAnimationDelays.texts * 1.75,
};

export const experienceAnimationDelays = {
  title: aboutAnimationDelays.description * 1.5,
  items: aboutAnimationDelays.description * 1.75,
};

export const educationAnimationDelays = {
  title: experienceAnimationDelays.items * 1.5,
  items: experienceAnimationDelays.items * 1.75,
};
