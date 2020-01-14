function slugger(...args){
    return args.join(' ').replace(/ /g,'-');
}

module.exports={
    slugger
}

