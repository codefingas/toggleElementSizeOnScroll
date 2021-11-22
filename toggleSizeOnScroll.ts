const divToChange: HTMLElement = document.getElementById('#sizeShifter');
var lastScroll = 0;
document.addEventListener("scroll", function(event){
    var st: number = this.body.scrollTop;
    if (st > lastScroll){
        var divHeight: number = Number(divToChange.style.height);
        var divWidth: number = Number(divToChange.style.width);
        divHeight-=5;
        divWidth-=5;

        divToChange.style.height = `${divHeight}`;
        divToChange.style.width = `${divWidth}`;

    } 
    else {
        var divHeight: number = Number(divToChange.style.height);
        var divWidth: number = Number(divToChange.style.width);
        divHeight+=5;
        divWidth+=5; 
        divToChange.style.height = `${divHeight}`;
        divToChange.style.width = `${divWidth}`;

    }
    lastScroll = st;
});
