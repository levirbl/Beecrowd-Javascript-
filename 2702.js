// var input ='41 42 43\n41 42 43'
var lines = input.replace('\n', ' ').split(' ')

var rdf = parseInt(lines.shift())
var rdb = parseInt(lines.shift())
var rdm = parseInt(lines.shift())
var rrf = parseInt(lines.shift())
var rrb = parseInt(lines.shift())
var rrm = parseInt(lines.shift())

if (rrf >= rdf) {
    var tf = rrf-rdf
} else {var tf = 0}
if (rrb >= rdb) {
    var tb = rrb-rdb
} else {var tb = 0}
if (rrm >= rdm) {
    var tm = rrm-rdm
} else {var tm = 0}

var total = tf + tb + tm
console.log(total)