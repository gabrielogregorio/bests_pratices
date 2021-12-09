// good code
let dateNow = Date.now()

// bad code
let msg='Olá'

// bad code
let name0     =    'gabriel gregorio'
let course0   =    'ads'
let github0   =    'github.com/gabrielogregorio'

// good code - if existis variable with large name, you have a problem in variable, do'not alignment
let name1 = 'gabriel gregorio'
let course1 = 'ads'
let github1 = 'github.com/gabrielogregorio'

// bad code
function isLastItem1(dataAny: any[], index: number) { return dataAny.length-1 == index}

// bad code
function isLastItem2(dataAny: any[], index: number) {
return dataAny.length-1 == index;
}

// good code
function isLastItem3(dataAny: any[], index: number) {
    return dataAny.length-1 == index;
}
    