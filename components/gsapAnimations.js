import { Power3 } from 'gsap';
import { useRef } from 'react';

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
    }
}

export function skillsAnimation(tl, skill1, list1, list2, list3, list4, list5, skill2, skillsSection) {
    tl.from(
        [skill1, list3, list2, list1], {
          y: -125,
            scrollTrigger: {
              trigger: skillsSection,
              start: 'top 50%',
              end: "+=300",
              scrub: .75,
            },
        },
    );
    tl.from(
      [list1, list2, list3], {
        opacity: 0,
        stagger: -.15,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 50%',
          end: "+=300",
          scrub: .75,
        },
      }
    ).from(
      [list4, list5], {
        opacity: 0,
        stagger: .15,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 30%',
          scrub: .75,
          end: "+=300"
        },
      },
    ).from(
      [skill1, skill2], {
        opacity: 0,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 50%',
          scrub: .75,
          end: "+=300"
        },
      }
    ).from(
        [skill2, list4, list5], {
          y: 125,
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
  gsap.from(
    bioRef,
    {
      opacity: 0,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 60%',
        end: "+=400",
        scrub: .75,
      },
    }
  )

  gsap.from(
    [button1, button2], {
      y: 50,
      opacity: 0,
      stagger: .2,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 30%',
        end: "+=150",
        scrub: .75,
        markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      },
    }
  )

  gsap.from(
    socialRefs, {
      y: 30,
      opacity: 0,
      stagger: .5,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 10%',
        end: "+=10",
        scrub: .75,
        markers: {startColor: "green", endColor: "red", fontSize: "12px"},
      },
    }
  )

}