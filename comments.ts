// bad code
// verifica e o player pode participar do campeonato
// Verifica se nos ultimos 15 dias não houve penalidades
if (
    (player.penlitiesIn2Weeks === false ) &&
    (player.age > 16) &&
    (champions.isOpen())) {
        console.log('pode participar')
}

// good code
if(player.isEligibleForChampions()) {
    console.log('pode participar')
}


// good code
// TODO - Essa função precisa de ser descontinuada, pois afeta o desempenho geral do código e a função xxx() é melhor e está substituindo esta função.
// FIXME - sddss
// TODO - Devido ao tempo, não foi possível realizar a refatoração dessa função. Transformar a consulta no banco em um hook.


// good code
// highligh importance of items
// A função trim remove espaços que podem causar bugs na API antiga
cpf = data[0].cpfs[0].trim()


// bad code
const Posts = async () => {
    // Make request api by return posts
    let items: any = await fetch('...posts');

    // get posts by request and atribute in posts var
    let { data: { posts } } = items

    // Return object posts
    return { posts }
}



// Good code +-
const Posts = async () => {
    let dataPosts: any = await fetch('...posts');
    let { data: { posts } } = dataPosts
    return { posts }
}


// bad code
// dia do mês
let dayOfMonth = 1


// good, but....
// yyy-mm-dd, groups 1111-22-33
let date = dateComplete.re('/(\d{4}-\d{2}-\d{2})/', 1)
// good code
let date = getFullYearOfDate(dateNowFull)


// bad code
// Se o player já ganhou um campeonato,
// Obtem uma lista de players e ve se o player
// atual também já ganhou
if(champions.getAllWinnersPlayers().toId().includes(player.id))

// good code
const allWinnersChmapionsId = champions.getAllWinnersPlayers().toId()
const playerId = player.id
if(allWinnersChmapionsId.includes(playerId))


// Not good
/* ======================= section of movies ======================= */

// bad pratices!
// if(test1 === 2) {}
// [code comented] comments like codes is rubbish and will stay for years as devs will be afraid to delete it!


// bad coments --- never used git my friend ??????
// story of code
// 20-02-2021 = Added new payment method
// 15-05-2021 = Adjust bug ...
// 15-05-2021 = Refactoring of ....


// good pratices.. Coments are bad!
// use for highlight importance and TODO.
