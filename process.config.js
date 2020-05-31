module.exports = {
  apps: [
    {
      name: "Notes",
      script: "./server/noteServer.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: "Auth",
      script: "./server/authServer.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: "gateway",
      script: "./server/gateway.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
    {
      name: "File Server",
      script: "./server/fileServer.js",
      watch: true,
      ignore_watch : ["node_modules"],
      watch: true,
    },
  ]
}