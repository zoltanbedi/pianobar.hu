/* eslint-disable no-console */
const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type DataJson implements Node {
      data: DataJson
      featuredImg: File @link(from: "fields.localFile")
    }
  `)
}

exports.onCreateNode = async ({ node, actions: { createNode, createNodeField }, createNodeId, getCache }) => {
  if (node.internal.type === 'DataJson' && node?.full_picture != null) {
    try {
      const fileNode = await createRemoteFileNode({
        url: node?.full_picture, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        getCache,
      })

      if (fileNode) {
        createNodeField({ node, name: 'localFile', value: fileNode.id })
        console.log('File created for featuredImg. ')
      }
    } catch (error) {
      console.log("Couldn't create featuredImg. ")
    }
  }
}
