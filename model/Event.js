const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  context: {
    page: {
      path: { type: String },
      referrer: { type: String },
      search: { type: String },
      title: { type: String },
      url: { type: String },
      screenWidth: { type: Number },
      screenHeight: { type: Number },
      charset: { type: String },
      language: { type: String },
      viewportWidth: { type: Number },
      viewportHeight: { type: Number },
      documentHeight: { type: Number },
      orientation: { type: String },
      timezone: { type: String },
      scrollTop: { type: Number },
      scrollLeft: { type: Number },
      colorDepth: { type: Number },
      devicePixelRatio: { type: Number },
      networkConnection: { type: String },
      pageLoadTime: { type: Number },
      documentReadyState: { type: String },
      fetchStart: { type: Number },
      domContentLoadedEventEnd: { type: Number },
      responseEnd: { type: Number },
      currentURLHash: { type: String },
      clientId: { type: String },
      pageTitle: { type: String },
      userAgent: { type: String }
    },
    userAgent: { type: String },
    ip: { type: String }
  },
  properties: {
    tag: { type: String },
    id: { type: String },
    classes: { type: String },
    text: { type: String },
    value: { type: String },
    name: { type: String },
    type: { type: String },
    href: { type: String },
    src: { type: String },
    alt: { type: String },
    placeholder: { type: String },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: { type: String },
    valueLength: { type: Number },
    tagName: { type: String },
    formAction: { type: String },
    formMethod: { type: String },
    formEnctype: { type: String },
    formTarget: { type: String },
    role: { type: String },
    ariaLabel: { type: String },
    ariaDescribedBy: { type: String },
    ariaControls: { type: String },
    ariaExpanded: { type: String },
    ariaLive: { type: String },
    tabIndex: { type: Number },
    lang: { type: String },
    style: { type: String },
    dataAttributes: { type: Map, of: String } // Use Map for dynamic data attributes
  },
  timestamp: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

