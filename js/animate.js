const controller = new ScrollMagic.Controller();

/*The M animation*/
const bg = document.querySelector('#main-view');
const m = document.querySelector('#__big_m');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;
const navbar = document.querySelector('#navbar');

bg.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / windowWidth) * 1.5;
    const mouseY = (e.clientY / windowHeight) * 1.5;

    // m.style.textShadow = `-${mouseX}px -${mouseY}px rgba(0, 255, 255, 0.7), ${mouseX}px ${mouseY}px rgba(255, 0, 0, 0.7)`;

});



document.addEventListener('scroll', () => {
    shrinkMenu();
});

let shrinkMenu = () => {
    let top = window.pageYOffset;
    let bgHeight = bg.scrollHeight;
    if (top > (bgHeight / 2)) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
}


/*scrollMagic*/

let triggerHeader = document.getElementById('trigger-header-leave');
let conocimiento = document.getElementById('conocimiento-start');
let moiName = document.getElementById('moi-name');
let totalOffset = moiName.offsetLeft;
let moiDesc = document.getElementById('moi-desc');
let mDesign = document.getElementById('m-design');
let middleLine = document.querySelector('.go-down');

let headerTimeline = new TimelineMax();

headerTimeline.to(moiName, 0.5, { scale: '0.5', opacity: 0 }, 0)
    .to(moiDesc, .5, { scale: '0.25', opacity: '0' }, 0);
// .to(middleLine, 0.5, { ease: Power4.easeIn, height: '100%', top: '60px' }, 0.2);


let tweenExpandLine = TweenMax.to(middleLine, 0.5, { ease: Power4.easeIn, height: '100%', top: '60px' }).pause();

let headerScene = new ScrollMagic.Scene({
        triggerElement: triggerHeader,
        duration: window.innerHeight
    })
    .on('enter leave', (evt) => {

        if (evt.type === 'enter' && evt.scrollDirection === 'FORWARD') {
            tweenExpandLine.play();
        }
        if (evt.type === 'leave' && evt.scrollDirection === 'REVERSE') {
            tweenExpandLine.reverse();
        }

    });
// .addIndicators({
//     name: 'header scene'
// });
headerScene.setTween(headerTimeline)
headerScene.addTo(controller);

let knowledgeTitle = document.getElementById('knowledge-title');

let knowledgeTimeline = new TimelineMax();


knowledgeTimeline.add(TweenMax.to(knowledgeTitle, 5, { opacity: '1', transform: 'translateY(0)' }));

let tweenMoveLine = TweenMax.to(middleLine, 0.5, { ease: Power4.easeIn, left: '95%', transform: 'translate(0)' }).pause();

let knowledgeScene = new ScrollMagic.Scene({
        triggerElement: conocimiento,
        duration: window.innerHeight / 2
    })
    .on('enter leave', (evt) => {


        if (evt.type === 'enter' && evt.scrollDirection === 'FORWARD') {
            tweenMoveLine.play();
        }
        if (evt.type === 'leave' && evt.scrollDirection === 'REVERSE') {
            tweenMoveLine.reverse();
        }

    });
// .addIndicators({
//     name: 'knowledge scene'
// });

knowledgeScene.setTween(knowledgeTimeline);
knowledgeScene.addTo(controller);


let conocimientoFin = document.getElementById('conocimiento-end');
let knowledgeTimelineEnd = new TimelineMax();

knowledgeTimelineEnd.add(TweenMax.to(knowledgeTitle, 5, { opacity: '0', transform: 'translate3d(0,-100px,0)' }));

let knowledgeSceneEnd = new ScrollMagic.Scene({
        triggerElement: conocimientoFin,
        duration: window.innerHeight / 2
    })
    .addIndicators({
        name: 'knowledge scene finish'
    });;
knowledgeSceneEnd.setTween(knowledgeTimelineEnd);
knowledgeSceneEnd.addTo(controller);