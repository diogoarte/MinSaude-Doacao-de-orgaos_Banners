var animations = [
{
    id: "#relogio",
    delayBefore :0,
    duration: 1000,
    delayAfter:2000,
    animations: {top:0, opacity:1}
},{
    id: "#relogio",
    delayBefore :0,
    duration: 400,
    delayAfter:0,
    animations: {top:-20, opacity:0}
},{
    id: "#i03",
    delayBefore :0,
    duration: 1000,
    delayAfter:2000,
    animations: {top:0, opacity:1}
},{
    id: "#i01",
    delayBefore :0,
    duration: 3000,
    delayAfter:0,
    animations: {top: -500}
},
{
    action: function() {
        var animLeft = [
            {
                id: "#i01",
                delayBefore :0,
                duration: 6000,
                delayAfter:0,
                animations: {left: -100}
            }
        ]
        new YAnimation(animLeft, {loop: false, clearAfterEnd: false}).startAnimation()
    }
},{
    id: "#i03",
    delayBefore :0,
    duration: 400,
    delayAfter:0,
    animations: {top:-20, opacity:0}
},
[
    {
        id: "#i04",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:1}
    },{
        id: "#i05",
        delayBefore :200,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:1}
    },{
        id: "#i06",
        delayBefore :400,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:1}
    },{
        id: "#i07",
        delayBefore :600,
        duration: 600,
        delayAfter:4000,
        animations: {top:0, opacity:1}
    },
],[
    {
        id: "#i04",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:0}
    },{
        id: "#i05",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:0}
    },{
        id: "#i06",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:0}
    },{
        id: "#i07",
        delayBefore :0,
        duration: 600,
        delayAfter:3000,
        animations: {top:0, opacity:0}
    },{
        id: "#fundo",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {opacity:0.95}
    },{
        id: "#i08",
        delayBefore :0,
        duration: 400,
        delayAfter:0,
        animations: {width: 300}
    },{
        id: "#i09",
        delayBefore :0,
        duration: 600,
        delayAfter:0,
        animations: {top:0, opacity:1}
    },{
        id: "#i10",
        delayBefore :0,
        duration: 600,
        delayAfter:3000,
        animations: {top:0, opacity:1}
    },
],
];
var movAnimations = new YAnimation(animations, {loop: true, clearAfterEnd: false});
movAnimations.startAnimation();