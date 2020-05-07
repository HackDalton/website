---
title: Sponsors
subtitle: Without these amazing companies, HackDalton would not be possible.
layout: page
---

<div class="grid">
    {% for sponsor in site.sponsors %}
    <div class="box has-text-centered">
        <a href="{{sponsor.url}}">
            <img src="{{sponsor.logo}}">
        </a>
    </div>
    {% endfor %}
</div>