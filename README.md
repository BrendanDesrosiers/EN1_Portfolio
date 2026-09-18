# My Engineering Portfolio

This is my portfolio site for our intro-to-engineering/robotics course. It's
a plain HTML/CSS website — no build tools, nothing to install — that
documents each in-class activity and project as I complete it, and doubles
as a public page I can point people to.

## How the site is organized

```
index.html          Home page — intro + a grid of cards, one per activity/project
index.css           Styles just for the home page
project.css         Shared styles for every activity/project detail page
theme.css           Colors/fonts used by both stylesheets, in one place
template.html       Starting point for a new activity or project page
activityNN.html     One in-class activity's page (e.g. activity01.html)
projectNN.html      One project's page (e.g. project01.html)
images/             All images, named to match their page (e.g. project04.png)
```

Each activity/project gets **one card** on the home page (image, title,
one-line description) that links to **one detail page** with the fuller
write-up: a hero image, a description, and optionally a photo gallery,
an embedded video, or a code sample.