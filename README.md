#leaflet-angular-icon

add a leaflet (marker) icon with a angular element

# usage

- include `leaflet-angular-icon.js` in your side
- use it instead of `L.Icon` or `L.DivIcon`
```javascript
L.angularIcon({
  className: 'my-class'
  element: <my angular element>
});
```