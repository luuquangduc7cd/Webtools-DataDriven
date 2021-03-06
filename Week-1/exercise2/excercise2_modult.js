let ptb2 = (a,b,c) => {
    if(a == 0){
        if(b == 0 && c == 0)
            return "Phuong trinh co vo so nghiem";
        else if(b == 0 && c || 0)
            return "Phuong trinh vo nghiem";
        else
            return `Phuong trinh co nghiem la ${-c/b}`;
    }
    else {
        let delta = b*b - 4*a*c;
        if(delta < 0)
            return "Phuong trinh vo nghiem";
        else if(delta == 0)
            return `Phuong trinh co nghiem kep: x1 = x2 = ${-b/(2*a)}`;
        else
            return `Phuong trinh co hai nghiem phan biet: x1 = ${(-b - Math.sqrt(delta))/(2*a)}; x2 = ${(-b + Math.sqrt(delta))/(2*a)}`;
    }
}

module.exports = {
    ptb2: ptb2
}