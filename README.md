# INFO

This was originally made by EdRoh on [GitHub] (https://github.com/ed-roh) and
[Youtube](https://www.youtube.com/watch?v=wYpCWwD1oz0)

## Why?

I'm learning React.js and I'm documenting issues that I had for others following
along in 2023. Not likely to continue updating this, but I'll likely use this as
a boiler plate for future projects.

<details>
<summary>Initial Comment, just tl;dr resource.</summary>
<p>If you have problems with flexbox centering your icons box in your Topbar, just add the marginLeft="auto" style to your Box element. Will push it to the right. </p>

<p>At 1:04:07, there's a skip that doesn't go back for some time. Just make sure that your index.js page is rendering the page with BrowserRouter instead of React.Strictmode, refer to his index.js file in github. Otherwise you'll get a blank page, with the browser console error: useRoutes() may be used only in the context of a Router component.</p>

<p>He also skips some more stuff, but he revisits for an explanation at 1:17:00. For a quick catch up I made a paste bin of what your sidebar return should be, when you get to this point so that you can follow along without confusion. https://pastebin.com/0iwqLghq</p>

<p>@fullcalendar/react and @fullcalendar/interaction not installing, I just added --force to the end of the request, got the error: export 'formatDate' (imported as 'formatDate') was not found in '@fullcalendar/react' I read documentation, and formatDate is now in "@fullcalendar/core" so import from there instead.</p>

<p>3:10:00 Nivo Line chart no longer supports left axis tickValues parameter. To reduce size in the dashboard I just disabled the axis left with: axisLeft={isDashboard ? undefined : { rest of axisLeft config This keeps the ticks but removes the labels, thought it would remove the ticks, but it does not.</p>

<p>For some reason ProgressCircle wouldn't render on the dashboard, it would render for the StatBox's but not under Campaign. This was my mistake because I added a % to the progress prop in ProgressCircle.jsx. iirc I was working by ear and I must have heard 75%? After removing, issue was resolved. Extremely strange because it would still render fine in the StatBox? Weird.</p>

<p>Lastly I made some changes to this and uploaded them to my GitHub. I'll list them here:</p>

</p>If the body of the page is too long and causes y axis overflow, the sidebar does not extend to the page height. I modified the sidebar.jsx component to address that. </p>

<p>On resize, the nivo map gives a ton of errors that have to do with g3, tbh not gonna mess with that, looks fine, not an in production project or anything. </p>

<p>Redid most of the formatting of the StatBox.jsx file, Just didn't come out how Ed had it. Maybe I made a mistake, or it was a browser issue. </p>
</details>
