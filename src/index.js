function slugger(...args){
    return args.join(' ').replace(/ /g,'-');
}

function slugger2(...args){
    return args.join(' ').split(' ').join('-');
}

module.exports={
    slugger,
    slugger2
}

