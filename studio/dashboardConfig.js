export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d49409442388ea6dd09cc0e',
                  title: 'Sanity Studio',
                  name: 'ptrckmrgn-portfolio-studio',
                  apiId: 'eea3bf78-5c30-4835-bbe6-9bbfc90c22e8'
                },
                {
                  buildHookId: '5d4940940b0e7b53774fe692',
                  title: 'Portfolio Website',
                  name: 'ptrckmrgn-portfolio',
                  apiId: '2bc71523-cd88-4758-a68c-044534faf7b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ptrckmrgn/ptrckmrgn-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://ptrckmrgn-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
