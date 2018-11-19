=== Easy Digital Downloads - Blocks ===
Contributors: easydigitaldownloads, sumobi
Tags: easy digital downloads, digital downloads, e-downloads, edd, blocks, gutenberg, editor
Requires at least: 4.9
Tested up to: 4.9.8
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Blocks for Easy Digital Downloads and the new WordPress editor.

== Description ==

This plugin requires [Easy Digital Downloads](https://wordpress.org/plugins/easy-digital-downloads/ "Easy Digital Downloads").

EDD Blocks adds a "Downloads" block to the new WordPress editor, also known as Gutenberg.

The Downloads block allows you to display a grid of Downloads on your site similar to the [downloads] shortcode already provided by Easy Digital Downloads. The Downloads block provides a visual representation of your downloads, allowing you to see a real-time preview of your downloads as you configure the various settings.

As well as being able to display downloads, a grid of Download Categories or Download Tags can be shown.

Display a grid of Downloads:

1. Set how many downloads should show per page
1. Set how many columns of downloads should show
1. Show or hide the buy button
1. Show or hide the price
1. Show or hide thumbnail images
1. Show or hide the excerpt
1. Show or hide the full content
1. Show or hide the pagination
1. Order downloads by "Date Created", "Earnings", "ID", "Price", "Random", "Sales", "Slug" or "Title"
1. Order downloads in an "Ascending" or "Descending" order
1. Show downloads from a specific category

= Display a grid of Download Categories =

1. Set how many columns of download categories should show
1. Show or hide download category thumbnail images
1. Show or hide download category names
1. Show or hide download category descriptions
1. Show or hide download category counts
1. Show or hide emprt download categories
1. Order download categories by "Count", "ID", "Name" or "Slug"
1. Order download categories in an "Ascending" or "Descending" order

= Display a grid of Download Tags =

1. Set how many columns of download tags should show
1. Show or hide download tag thumbnail images
1. Show or hide download tag names
1. Show or hide download tag descriptions
1. Show or hide download tag counts
1. Show or hide emprt download tags
1. Order download tags by "Count", "ID", "Name" or "Slug"
1. Order download tags in an "Ascending" or "Descending" order

= Shortcodes =

Gutenberg also provides a shortcode block so we've added a [download_categories] and [download_tags] shortcode. Each shortcode shares the same attributes, mimicking the options of the Downloads block:

**thumbnails** 

true (default) | false

Whether or not to show the thumbnail image.

**title**

true (default) | false

Whether or not to show the category or tag name.

**description** 

true (default) | false

Whether or not to show the category or tag description. 

**show_empty** 

true | false (default)

Whether or not to show empty terms.

**columns**

1 | 2 | 3 (default) | 4 | 5 | 6

The number of columns.

**count**

true (default) | false

Whether or not to show the number of downloads in each term.

**orderby**

count (default) | id | name | slug

What to order the terms by.

**order** 

ASC | DESC (default)

In which order to display the terms.

**Shortcode examples**

[download_categories count="false" orderby="name" order="ASC" title="false" columns="4"]

[download_tags orderby="id" order="DESC" columns="2"]

== Installation ==

1. Unpack the entire contents of this plugin zip file into your `wp-content/plugins/` folder locally
1. Upload to your site
1. Navigate to `wp-admin/plugins.php` on your site (your WP Admin plugin page)
1. Activate this plugin

OR you can just install it with WordPress by going to Plugins >> Add New >> and type this plugin's name

== Frequently Asked Questions ==

= How do I add images to Download Categories and Download Tags? =

1. Click either "Categories" or "Tags" from the Downloads section in the WordPress sidebar
1. Click the "Edit" link on the category or tag you wish to add an image to
1. At the bottom of the edit screen, click "Choose Image" in the "Image" section
1. Select an image and click "Set as image"
1. Click "Update"

= Can I change the purchase button color? =

Yes, the purchase button color can be changed from Downloads &rarr; Settings &rarr; Styles. Simply change the "Default Button Color" to a color of your choosing and save.

== Screenshots ==

1. The Downloads block and its settings

== Changelog ==

= 1.0 =
* Initial release
