/*
 * L.AngularIcon is a lightweight angular-element-based icon class (as opposed to the only html-based L.DivIcon)
 * to use with L.Marker.
 */

L.DivIcon = L.Icon.extend({
  options: {
    className: 'leaflet-angular-icon',
    element: false
  },

  createIcon: function (oldIcon) {
    var container = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : window.document.createElement('div'),
        options = this.options;

    if options.element {
      var el = options.element instanceof window.HTMLElement ? options.element : options.element[0];
      container.appendChild el
    }

    this._setIconStyles(container, 'icon');
    return container;
  },

  createShadow: function () {
    return null;
  }
});

L.angularIcon = function (options) {
  return new L.AngularIcon(options);
};