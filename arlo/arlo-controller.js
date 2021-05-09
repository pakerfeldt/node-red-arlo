'use strict'

module.exports = function (RED) {
  function ArloControllerNode (config) {
    this.node = RED.nodes.createNode(this, config)
    var _this = this
    this.host = config.host
    this.port = config.port
    this.password = this.credentials.password
    config.password = this.password
    config.zones = config.zones
    config.atomicEvents = false
    config.partitions = config.partitions
    this.connected = false
    this.connecting = false

    this.el = new EnvisaLink(config)

    this.users = {}

    this.register = function (node) {
      _this.log(RED._(node))
    }

    this.deregister = function (node, done) {
      _this.log(RED._(node))
    }
  }

  RED.nodes.registerType('arlo-controller', ArloControllerNode, {
    credentials: {
      password: { type: 'password' }
    }
  })
}
