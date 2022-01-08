import { Power3 } from 'gsap';

export function titleAnimation(tl, initialOpen, title, subtitleRef) {
    const titles = [title, subtitleRef];
    if (initialOpen) {
      tl.from(
        titles,
        {
          duration: 1,
          opacity: 0,
          x: 100,
          ease: Power3.easeIn,
          stagger: .5,
        }
      );
    };
};

export function skillsAnimation(tl, skill1, list1, list2, list3, list4, list5, skill2, skillsSection) {
  tl.fromTo(
      [skill1, list3, list2, list1], 
      {y: -125},
      {y: 0,
      scrollTrigger: {
        trigger: skillsSection,
        start: 'top 50%',
        end: "+=300",
        scrub: .75,
        }
      }
  );
  tl.fromTo(
    [list1, list2, list3], 
    {opacity: 0},
    {
    opacity: 1,
    stagger: -.15,
    scrollTrigger: {
      trigger: skillsSection,
      start: 'top 50%',
      end: "+=300",
      scrub: .75,
    }},
  ).fromTo(
    [list4, list5], 
    {opacity: 0},
    {
      opacity: 1,
      stagger: .15,
      scrollTrigger: {
        trigger: skillsSection,
        start: 'top 30%',
        scrub: .75,
        end: "+=300"
      },
    },
  ).fromTo(
    [skill1, skill2], 
      {opacity: 0},
      {
      opacity: 1,
      scrollTrigger: {
        trigger: skillsSection,
        start: 'top 50%',
        scrub: .75,
        end: "+=300"
      },
    }
  ).fromTo(
      [skill2, list4, list5], 
      {y: 125},
      {
        y: 0,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 50%',
          end: "+=300",
          scrub: .75,
        },
      },
    );
}

export function aboutAnimation(gsap, aboutSection, bioRef, button1, button2, socialRefs) {
  gsap.fromTo(
    bioRef,
    {opacity: 0},
    {
      opacity: 1,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 60%',
        end: "+=400",
        scrub: .75,
      },
    }
  );

  gsap.fromTo(
    [button1, button2], 
    {
      y: 50,
      opacity: 0},
    {
      y: 0,
      opacity: 1,
      stagger: .2,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 20%',
        end: "+=150",
        scrub: .75,
      },
    }
  );

  gsap.fromTo(
    socialRefs, 
    {y: 30,
    opacity: 0},
    {
      y: 0,
      opacity: 1,
      stagger: .5,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 10%',
        end: "+=10",
        scrub: .75,
      },
    }
  );
}