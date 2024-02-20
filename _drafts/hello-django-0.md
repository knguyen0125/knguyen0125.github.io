---
layout: post
title: Hello, Django
tags:
  - uncategorized
category: learn-django
part: 0
---

This is a documentation of my Django learning journey

## Motivation

In JavaScript world, we have a new framework every week. They are shiny new toys, and developers want to play with them,
at the detriment of business needs. The end results is that it might take them days to build a simple CRUD application.

In essence, I don't want to write code. I don't want to maintain code. Code is a mean to an end - solving business
problem, so any line of code we write need to be carefully considered. I don't want to spend weeks wiring up things just
so that I can start solving my problems.

I want a "battery-included" framework that just work. Off the top of my head, there are:

* [Django](https://www.djangoproject.com)
* [Ruby on Rails](https://www.rubyonrails.org)

For this series, I will focus on Django, more specifically Django 5.1 (latest at the point of writing)

Additionally, I will maintain a list of dependencies that I'll include in this project. The point is simplicity. The more
dependencies I introduce to a project, the harder it is to maintain. We only add new dependency if, and only if, the benefits of adding that dependencies outweigh the cost.

As of now, the approved dependencies are:

| Dependency                             | Why                      | Added in |
|----------------------------------------|--------------------------|----------|
| Python (3.12)                          | Runtime                  | Part 0   |
| pip                                    | Runtime, Package Manager | Part 0   |
| pip - Django (v5.0)                    | Framework                | Part 0   |
| poetry                                 | Isolated runtime         | Part 1   |
| pyenv                                  | Isolated runtime         | Part 1   |
| pre-commit                             | Git best practice        | Part 1   |
| ruff                                   | Linter & Formatter       | Part 1   |
| commitlint & commitlint-config-gitmoji | Commit message linter    | Part 1   |

## The project

I want to build something that is non-trivial and represents something that is typically necessary of a typical software project.

The app that I decided to build is a "todo list" app. Current requirements include

| Requirement                | Completed |
|----------------------------|-----------|
| Support multi-tenancy      |           |
| Looks decent               |           |
| Can be horizontally scaled |           |
