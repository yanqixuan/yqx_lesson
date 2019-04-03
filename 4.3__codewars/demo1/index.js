function generateHashtag(str){
    // if(str.length>140 || str === '')
    // return false;
    // else
    //     // var s = str.split(' ');
    // //    var ss = s.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //     return '#'+str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return str.length>140 || str==='' ? false:'#'+str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(generateHashtag('hello miss dong'));