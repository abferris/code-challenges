/**
 * @param {string} str
 * @return {string}
 */
function zigzag(str, rows) {
    //create container
    let container = [];
    for(let i=0; i < rows; i++ ){
        container.push([]);
    }
    let direction = 1;
    let c = 0;
    for(let i=0;i<str.length;i++){
        console.log (i,str[i],c, direction)
        container[c].push(str[i]);
        c+=direction;
        if( c==container.length-1){
            direction=-1;
        } else if ( c==0){
            direction=1;
        }
    }
    for(let i=0; i < rows; i++ ){
        container[i]= container[i].join("");
    }
    return container.join("")
};

console.log(zigzag("PAYPALISHIRING",3))


module.exports =  zigzag;