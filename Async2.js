console.log('async function')


function test1() { console.log('test1') }
function test2() { console.log('test2') }
function test3() { console.log('test3') }
function test4() { console.log('test4') }
function test5() { console.log('test5') }

function test22() { console.log('test22') }
function test44() { console.log('test44') }


function main1() {
    console.log('main1')
    test1()
    setTimeout(test2, 0)
    test3()
    setTimeout(test4, 0)
    test5()
}
function main2() {
    console.log('main2')
    test1()
    setTimeout(test22, 0)
    test3()
    setTimeout(test44, 0)
    test5()
}
main1()
main2()