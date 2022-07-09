module.exports = {
    title: "math-memo",
    locales:{
        '/':{
            lang:'ja'
        }
    },
    dest: 'dist',
    base: '/math-memo/',
    plugins: [
        ['vuepress-plugin-container', [
            {
              type: 'thm',
              before: info => `<div class="theorem"><p class="title">${info}</p>`,
              after: '</div>',
            },],
        ],
        ['@maginapp/katex', [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            ],
        ],

    ]
}