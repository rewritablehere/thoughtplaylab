const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e) {span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span.addEventListener('mouseout', function(e) {
span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: ' calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
