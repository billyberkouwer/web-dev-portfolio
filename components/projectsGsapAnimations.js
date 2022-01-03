import { Power3 } from "gsap";

export function openAnimation(tl, sectionRef, imageRef, titleRef) {
    tl.from(
        [imageRef], {
            x: 100,
            opacity: 0,
            duration: .5,
        }
    )
}

export function imageAnimation(tl, sectionRefs, imageRefs) {
    for (let i = 0; i < imageRefs.length; i++) {
        tl.from(
            imageRefs[i], {
              x: 100,
                scrollTrigger: {
                  trigger: sectionRefs[i],
                  start: 'top 70%',
                  end: "+=400",
                  scrub: .75,
                },
            },
        );
    }
}

export function sectionAnimation(tl, sectionRefs) {
    for (let i = 0; i < sectionRefs.length; i++) {
        tl.from(
            sectionRefs[i], {
              opacity: 0,
                scrollTrigger: {
                  trigger: sectionRefs[i],
                  start: 'top 70%',
                  end: "+=400",
                  scrub: .75,
                },
            },
        );
    }
}