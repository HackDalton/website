---
title: Guest Problem Writers
subtitle: Learn more about the guests who write problems for HackDalton!
layout: page
---

<div class="people-grid">
    {% for writer in site.guest-problem-writers %}
    <div class="box">
        <p class="title">{{writer.name}}</p>
        <p class="subtitle">{{writer.title}}</p>
        <hr />
        <div class="field is-grouped is-grouped-multiline">
            {% if writer.classOf %}
            <div class="control">
                <div class="tags has-addons">
                    <span class="tag is-dark">Dalton</span>
                    <span class="tag is-link">'{{writer.classOf}}</span>
                </div>
            </div>
            {% endif %}
            {% if writer.college %}
            <div class="control">
                <div class="tags has-addons">
                    <span class="tag is-dark">college</span>
                    <span class="tag is-success">{{writer.college}}</span>
                </div>
            </div>
            {% endif %}
            <!-- <div class="control">
                <div class="tags has-addons">
                    <span class="tag is-dark">chat</span>
                    <span class="tag is-primary">on gitter</span>
                </div>
            </div> -->
        </div>
        <p>{{writer.description}}</p>
        <div class="writer-social-links">
        <span><i class="fab fa-github"></i> <a href="https://github.com/{{writer.github}}">@{{writer.github}}</a></span>
        <span><i class="fab fa-twitter"></i> <a href="https://twitter.com/{{writer.twitter}}">@{{writer.twitter}}</a></span>
        </div>
    </div>
    {% endfor %}
</div>