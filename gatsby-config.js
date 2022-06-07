module.exports = {
    siteMetadata: {
        title: `Emily Connors`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/assets/"
        },
        __key: "images"
    },
    {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: /\.inline\.svg$/
            }
        }
    }
]
};