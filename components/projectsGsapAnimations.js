export function openAnimation(tl, sectionRef, imageRef, titleRef) {
    tl.fromTo(
        [imageRef], {
            x: 100,
            opacity: 0,
            duration: .5,
        }, {
            x: 0,
            opacity: 1,
        }
    )
}

export function imageAnimation(tl, sectionRefs, imageRefs) {
    for (let i = 0; i < imageRefs.length; i++) {
        tl.fromTo(
            imageRefs[i],
            {x: 100},
            {
                x: 0,
                scrollTrigger: {
                trigger: sectionRefs[i],
                start: 'top 70%',
                end: "+=400",
                scrub: .75,
            }
        },
        );
    }
}

export function sectionAnimation(tl, sectionRefs) {
    for (let i = 0; i < sectionRefs.length; i++) {
        tl.fromTo(
            sectionRefs[i],
                {opacity: 0},
                {
                    opacity: 1,
                    scrollTrigger: {
                    trigger: sectionRefs[i],
                    start: 'top 70%',
                    end: "+=400",
                    scrub: .75,
                }},
        );
    }
}