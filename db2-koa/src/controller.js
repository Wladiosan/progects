async function home(ctx) {
    await ctx.render('index', {
        title: 'Home Page'
    })

}

async function profile(ctx) {
    await ctx.render('profile', {
        title: 'Profile Page'
    })
}

module.exports = {
    home, profile
}