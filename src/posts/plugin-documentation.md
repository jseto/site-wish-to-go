---
className: page
---

<StartWishToGo noCounter={true}/>

# Plugin Documentation

## How To Use Wish To Go Plugin

> Click the link for an installation guide of the [**Wordpress plugin** for the Travel Planner](https://wordpress.org/plugins/wish-to-go/)

Installing **Wish To Go** in your blog is really easy. We provide several widgets in the form of an _HTML_ tag. The [WishWidget](#the-wishwidget-tag) shows a heart next to posts destinations where the reader can click to add them to the _Travel Bucket List_. The [ShareTripWidget](##the-sharetripwidget-tag) is used to share the travel blogger trips with their readers. 

[TravelPlanWidget](#the-travelplanwidget-tag) is used to implement the **Trip Planner** in your blog. Finally, the [WishCounterWidget Tag Reference](#the-wishcounterwidget-tag) shows a heart with the number of selected destinations and by clicking on it, shows the _Travel Planner_.

In order the widgets to work, you should load the JavaScript code in your page.

- [Loading the JavaScript Code](#loading-the-javascript-code)

- [WishWidget Tag Reference](#the-wishwidget-tag)

	Attributes: [`country`](#country), [`city`](#city), [`activity`](#activity), [`post`](#post), [`picture`](#picture), [`label`](#label)

- [TravelPlanWidget Tag Reference](#the-travelplanwidget-tag)

- [WishCounterWidget Tag Reference](#the-wishcounterwidget-tag)

- [ShareTripWidget Tag Reference](#the-sharetripwidget-tag)

	Attributes: [`user-id`](#user-id), [`trip-name`](#trip-name), [`icon-url`](#icon-url), [`label`](#label), [`sub-label`](#sub-label)

## Loading the JavaScript Code

The JavaScript code is loaded by inserting this 

```html
<script src="https://cdn.wish-to-go.com/wish-to-go.main.js"></script>
```

tag at the bottom of your **HTML** document but still inside the `<body>` tag.

A very minimalistic webpage loading a **WishWidget** and the needed script is shown below:

```html
<html>
<body>
	<h1>My Entry Title</h1>
	<p>
		This is the entry body with a Wish To Go Heart.
		<WishWidget country="TH"></WishWidget>
	</p>
	<script src="https://cdn.wish-to-go.com/wish-to-go.main.js"></script>
</body>
</html>
```

The highlighted line is the one loading the JavaScript code. Note that it is inserted just before the `</body>` closing tag.

### Troubleshooting 

In some cases, the initialization of the script can fail because it is called before the page is rendered. This will likely happen when server side rendering is used.

The **Wish to go** JavaScript code exposes a global function in the window namespace called `wtgInit`. If the **WishWidget** and **TripPlannerWidget** are not rendered properly, you can call the `wtgInit` function somewhere in your webpage where you know the document has been rendered.

## The WishWidget Tag

The **WishWidget** is used to show the **wish heart** tag <WishWidget country="TV"></WishWidget>in any part of a blog post. You only have to insert the following _html_ code snippet where you want the heart to appear.

```html
<WishWidget country="Spain"></WishWidget>
```

_This configuration will identify a blog entry talking about Spain_.

The **WishWidget** snippet can be placed in any part of your _html_ page.

The following code shows just a few of the multiple places where you can insert the **WishWidget**. Only your creativity and imagination can put the limits.

```html
<h1>My Post about Thailand <WishWidget country="TH"></WishWidget></h1>
<p>The capital of the country is <strong>Bangkok
		<WishWidget
			country="TH"
			city="Bangkok">
		</WishWidget>
	</strong> which has a vibrant nightlife
</p>
<h2>Things to do</h2>
<ul>
	<li>
		Grand Palace
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Grand Palace">
		</WishWidget>
	</li>
	<li>
		Wat Pho
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Wat Pho">
		</WishWidget>
	</li>
	<li>
		Chatuchak
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Chatuchak">
		</WishWidget>
	</li>
</ul>
```

The code above will produce:

> <h1>My Post about Thailand <WishWidget country="TH"></WishWidget></h1>
> <p>The capital of the country is 
> 	<strong> Bangkok
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok">
> 		</WishWidget>
> 	</strong>
> 	which has a vibrant nightlife
> </p>
> <h2>Things to do</h2>
> <ul>
> 	<li>
> 		Grand Palace
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Grand Palace">
> 		</WishWidget>
> 	</li>
> 	<li>
> 		Wat Pho
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Wat Pho">
> 		</WishWidget>
> 	</li>
> 	<li>
> 		Chatuchak
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Chatuchak">
> 		</WishWidget>
> 	</li>
> </ul>

### WishWidget attributes

In other to define the behaviour of the widget and the information to transfer to the **Trip Planner**, the **WishWidget** tag defines several attributes that you can use. All, except `country` attribute are optional.

- [`country`](#country)
- [`city`](#city)
- [`activity`](#activity)
- [`post`](#post)
- [`picture`](#picture)
- [`label`](#label)

#### `country`

Country ISO code (recommended) or country name.

This is the only mandatory attribute. You should use the `country` attribute alone to set a ***Country WishWidget***[^country_wishwidget] which indicates that the _wish_ refers to a country as a whole.

The `country` attribute, when used with `city` or `activity` attributes, helps to identify in which country is a city or an activity is carried out.

```html
<WishWidget country="TH"></WishWidget>
```

_The example above will show in your post a **Wish to go** heart and the context semantics is referring to Spain as a whole country_.

#### `city`

City name

`city` attribute should be used along with `country` attribute. It is used to specify that the _wish heart_ refers to a city. A city is where the traveller will sleep. If you think the visit to a city or village can be done from another city in a one-day tour, it is better to specify it as an activity done from the sleeping city.

You should use a widely known name of the city in order to keep consistency along blog posts. For example, Bangkok is known to locals as _Krungtep_ or _Krungtep Maha Nakhon_ or even _KMN_ but the most known around the world, even to the locals, is Bangkok. Although you are not obliged to use Bangkok, we recommend to use standardized English names as this name will be passed to flight, accommodation and tour search engines.

This city name has to be consistent in all your blog site. If you use different city names in the attribute, it will appear as different cities in the **Trip Planner** giving a bad user experience to your readers. In your post text, you can use any name to refer the city or even use the different names as the city is known. You only have to be consistent in the **WishWidget** attribute.

```html
<p>
	We are talking about Bangkok or, as known to locals, <em>Krungtep</em>
	<WishWidget
		country="TH"
		city="Bangkok">
	</WishWidget>.
</p>
```

The above code produces:

> <p>
> 	We are talking about Bangkok or, as known to locals, <em>Krungtep</em>
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok">
> 	</WishWidget>.
> </p>

_The above snippet is telling to the system that the **Wish to go** heart is in the semantic context of the city of Bangkok in Thailand_

#### `activity`

Activity name

An activity can be something the traveller can do at the destination. This includes monuments, spots, tours, courses or any other experience that can be done in a city or from a city.

An activity can be a city name if you recommend not to overnight there because it is better to visit in a day tour from another city. For example, there are many tours visiting the city of _Amphawa_ (2 hours drive from Bangkok) and most of times the traveller will not overnight there but going back to Bangkok. You can use one **WishWidget** for the city, giving the opportunity to book accommodation from the **Trip Planner** and other **WishWidget** as an activity, allowing the traveller to book a tour.

Inserting this code:

```html
<p>
	In the city of <strong>Amphawa</strong>
	<WishWidget
		country="TH"
		city="Amphawa">
	</WishWidget>
	you can find the popular Amphawa Floating Market. The best way to visit the floating market is by hiring a <strong>one-day tour</strong>
	<WishWidget
		country="TH"
		city="Bangkok"
		activity="Amphawa">
	</WishWidget>
	from Bangkok. They will take there in the morning and you will be back to Bangkok around 5 pm. 
	Be sure you don't miss the boat ride along the <strong>Mae Klong River</strong>
	<WishWidget
		country="TH"
		city="Bangkok"
		activity="Mae Klong River Tour">
	</WishWidget>
	at night time to see the fireflies flying along the riverside.
</p>
```

will produce

> <p>
> 	In the city of <strong>Amphawa</strong>
> 	<WishWidget
> 		country="TH"
> 		city="Amphawa">
> 	</WishWidget>you can find the popular Amphawa Floating Market. The best way to visit the floating market is by hiring a <strong>one-day tour</strong>
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok"
> 		activity="Amphawa">
> 	</WishWidget>from Bangkok. They will take there in the morning and you will be back to Bangkok around 5 pm. 
> 	Be sure you don't miss the boat ride along the <strong>Mae Klong River</strong>
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok"
> 		activity="Mae Klong River Tour">
> 	</WishWidget>at night time to see the fireflies flying along the riverside.
> </p>

#### `post`

Post URL

You can specify an alternative web page address pointing to a different post. Normally the post should point to the page where the **WishWidget** is inserted but you might want to change it. If you don't want to set an alternative post address you don't have to specify the `post` attribute as it is inferred automatically.

The post URL can be shown in the **Trip Planner** as a reference for the reader.

On some occasions you may want to point to a different post in your blog, i.e. when blogging about a city and you insert a country **WishWidget** and you have a specific post about the country. In that case you can set the country post address by using this attribute.

The following code in a post about Bangkok,

```html
<h1>
	Bangkok
	<WishWidget
		country="TH"
		city="Bangkok">
	</WishWidget>
	<!-- Above you don't need to specify the post attribute
			as the post URL	is this page address -->
</h1>
<p>
	Bangkok is the capital city of Thailand
	<WishWidget
		country="TH"
		post="/travel/my-posts/countries/thailand">
	</WishWidget>.
	<!-- Here you set the post attribute because there is a more specific 
			post about Thailand as a country in /my-post/countries/thailand -->
</p>
```

will show

> <h1>
> 	Bangkok
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok">
> 	</WishWidget>
> </h1>
> <p>
> 	Bangkok is the capital city of Thailand
> 	<WishWidget
> 		country="TH"
> 		post="/travel/posts/countries/thailand">
> 	</WishWidget>.
> </p>


#### `picture`

Picture URL

Featured image URL. This picture, if set, will be used in the **Trip Planner** to illustrate the related destination.

You can use it for a country, a city or an activity **WishWidget**. When used in a ***Country WishWidget***[^country_wishwidget], the picture will be used to decorate the related country entry in the **Trip Planner**. If used in a ***City WishWidget***[^city_wishwidget], the picture will illustrate the corresponding city entry and when used with an ***Activity WishWidget***[^activity_wishwidget], the picture will adorn the associated entry in the **Trip Planner**.

#### `label`

Shows a button with the `label` attribute text

When `label` is set to an arbitrary text string, the **WishWidget** takes the form of a button and shows the text in the `label` attribute. If `label` is set to `true`, the text shown in the button is the localized _Wish to go_ string. When set to `false` (default) or not set it doesn't show any text nor have the shape of a button.

Writing the following html code:

```html
<p>
	The following widget will not show any text
	<WishWidget
		country="TH">
	</WishWidget>
</p>
<p>
	Here it shows the standard text
	<WishWidget
		country="TH"
		label="true">
	</WishWidget>
</p>
<p>
	And this will show Add to Wishlist
	<WishWidget
		country="TH"
		label="Add to Wishlist">
	</WishWidget>
</p>
```

will show

> <p>
> 	The following widget will not show any text
> 	<WishWidget
> 		country="TH">
> 	</WishWidget>
> </p>
> <p>
> 	Here it shows the standard text
> 	<WishWidget
> 		country="TH"
> 		label="true">
> 	</WishWidget>
> </p>
> <p>
> 	And this will show Add to Wishlist
> 	<WishWidget
> 		country="TH"
> 		label="Add to Wishlist">
> 	</WishWidget>
> </p>

## The TravelPlanWidget Tag

The **Travel Plan Widget** is used to place the **Trip Planner** in your page. You only need to insert the following **HTML** code where you want the **Trip Planner** to appear in your blog page.

```html
	<TravelPlanWidget></TravelPlanWidget>
```

You can place the **TravelPlanWidget** tag in any place of your webpage but due to the space needed to show the reader's trip plan, it is better to place it in a dedicated page or in a sidebar.

### TravelPlanWidget attributes

The **TravelPlanWidget** has only one attribute. It is used to set the customer's id you received upon registration. To set your customer's id use the following code:

```html
	<TravelPlanWidget
		customer-id="xxxx-xxx-xxx-xxx"
	>
	</TravelPlanWidget>
```

Change the _xxxx-xxx-xxx-xxx_ string by your own customer's id.

## The WishCounterWidget Tag

This tag will show a heart icon with a wish counter in the top right corner of the heart. The Trip Planner will appear a modal window when the user clicks on it. If you don't want a modal window, you can set the page URL where you have the **Travel Plan Widget** using the `trip-planner` attribute.

This widget is to be used in the bottom of your blog pages or as a menu item in the way it is used as a shopping chart in marketplaces.

### WishCounterWidget attributes

#### `trip-planner`

URL where you have the **Travel Plan Widget**. When the user clicks on the **WishCounterWidget**, it will be sent to the URL specified in this attribute. If you leave this attribute empty or it is not declared, when the user clicks on the _widget_ a modal window with the Travel Plan will appear. We recommend **not setting** this attribute as it will improve the _user experience_.

## The ShareTripWidget Tag

The ShareTripWidget copies an stored trip from a user, typically the blogger user to a readers _Travel Planner_. This is a nice way to share trips with readers, so they don't have to do it by themself.

This widget shows a big button with information about the trip to share. When the reader clicks the **ShareTripWidget** button, the associated trip is copied to the reader's personal Travel Planner and opens it in a modal dialog.

The following code: 

```html
<ShareTripWidget
	user-id="xxxx-xxx-xxx-xxx"
	trip-name="Wish To Go Trip to Thailand"
	icon-url="https://static-images/blogger.png"
>
</ShareTripWidget>
```
will produce 

> <ShareTripWidget
> 	user-id="5RgbbnW5uDZV0sofyNe3NWws1qs1"
> 	trip-name="Wish To Go Trip to Thailand"
> 	icon-url="/images/blogger.png">
> </ShareTripWidget>

### ShareTripWidget attributes

#### `user-id`

This is the `user-id` of the user owning the trip to share. Normally, it is the blogger's `user-id`, but can be any existing user.

#### `trip-name`

The stored trip name in the `user-id` **Travel Planner**.

#### `icon-url`

The source trip owner avatar. It's an optional attribute.

#### `label`

Text to display in the main area of the **ShareTripWidget**. If not set, a standard message is displayed. Contain details of the itinerary and a _call to action_ to invite the reader to click on it.

#### `sub-label`

Smaller text displayed in the **ShareTripWidget**. If not set, a standard message is displayed. Use it to engage with your readers telling that it is your personal itinerary.

[^country_wishwidget]: A ***Country WishWidget*** is a **WishWidget** with the `country` attribute set but not `city` and `activity` attributes. It is used to denote that the **WishWidget** describes a country as a whole.

[^city_wishwidget]: A ***City WishWidget*** is a **WishWidget** with the `country` and `activity` attributes set but not the `activity` attribute. It is used to denote that the **WishWidget** describes a city.

[^activity_wishwidget]: An ***Activity WishWidget*** is a **WishWidget** with the `country`, `city` and `activity` attributes set. It is used to denote that the **WishWidget** describes an activity that can be done in the related city.
