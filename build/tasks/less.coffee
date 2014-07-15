module.exports = ->
  @loadNpmTasks "grunt-contrib-less"

  # Generate style file
  @config "less",
    release:
      files:
        "app/styles/site.css": "app/less/site.less"
