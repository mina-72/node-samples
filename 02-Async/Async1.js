console.log('async function')


function test1() { console.log('test1') }
function test2() { console.log('test2') }
function test3() { console.log('test3') }
function test4() { console.log('test4') }
function test5() { console.log('test5') }


function main() {
    console.log('main')
    test1()
    setTimeout(test2, 5)
    test3()
    setTimeout(test4, 1)
    test5()
}

main()