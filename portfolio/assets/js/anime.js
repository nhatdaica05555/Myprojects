$(function(){
	TweenMax.staggerFrom(('.square'),  2.5, {scale: 0.5,opacity: 0 ,ease: Back.easeOut.config(1.7), x: -300} , 0.4);
	TweenMax.from(('.avatar'), 1.5, {scale: 0.5,opacity: 0,ease: Circ.easeOut }).delay(2);
	TweenMax.from(('.abcxyz'), 1.5, {scale: 0.5,opacity: 0,ease: Circ.easeIn }).delay(2);
})