---
layout: embed
hidden: true
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