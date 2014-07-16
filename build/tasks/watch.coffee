module.exports = ->
  @loadNpmTasks "grunt-contrib-watch"

  # Generate style
  @config "watch",
    less:
        files: "app/less/*"
        task: ["less"]
