const path = require("path");

exports.createPages = async({graphql, actions, reporter}) => {
  // Destructure the createPage function from the actions object
  const {createPage} = actions;
  // use a graphql query to get our blog posts
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          body
          frontmatter {
              date
              title
          }
        }
      }
    }
    `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Retrieve blog posts
  const posts = result.data.allMdx.nodes;

  // call `createPage` for each blog post
  posts.forEach((node) => {
    createPage({
      // Use the slug to create the url path
      path: `/blog/${node.slug}`,
      // This component will wrap our MDX content
      component: path.resolve("./src/pages/blog-post.js"),
      // can use context to pass props to the MDX component defined above
      context: {
        node,
      },
    });
  });
};
