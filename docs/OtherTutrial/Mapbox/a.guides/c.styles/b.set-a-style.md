# Set a style
When adding a map to a web application or website using Mapbox GL JS, you must specify a [style](https://docs.mapbox.com/help/glossary/style/) to define how the map is displayed. A style dictates the map's visual design, including colors, labels, and feature visibility. It also includes information about data sources, and is used by the SDK to fetch the appropriate data necessary to render the map.

Mapbox has several professionally designed styles for use in various types of applications, and many developers invest in designing highly-customized styles to make their Mapbox maps shine. Explore custom styles in our [Style Gallery](https://www.mapbox.com/gallery).

Once a style is loaded, you can continue to manipulate it at runtime, changing the appearance of the map by adding or removing layers, changing layer properties, and more.

This guide explains how to set and configure a style when initializing a map and how to switch styles dynamically during runtime. Developers can choose from a variety of options, including Mapbox Standard, classic Mapbox styles, and custom styles designed in Mapbox Studio.

## Load a style

