var c = 1
while (c <= 100) {
    var par = c%2
    if (c == 1) {
        par = 1
    }
    if (par == 0) {
        console.log(c)
    }
    c++
}