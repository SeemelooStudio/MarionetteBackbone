module.exports = ->
  @loadNpmTasks "grunt-contrib-watch"

  # Generate style
  @config "watch",
    less:
        files:
            "app/styles/site.css": "app/less/site.less"
    options:
        "debounceDelay":250
