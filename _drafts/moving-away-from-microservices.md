---
layout: post
title: Moving away from microservices
tags:
- architecture
- microservices
---

Microservices architecture is a complex beast, yet it's ubiquitous - it seems that every new project is starting out with microservices nowadays.

* The common argument is "Microservices scale better" and repeated verbatim by every new developers, never a concrete answer? 
* Microservices tends to ended up being a "Distributed Big-ball of Mud"
* It seems like most projects that started out as microservices are there to stoke the curiosity of developer, and not business needs.
* IMO you can go very far with
  * Some backend framework
  * Some frontend framework (or none)
  * Postgres
    * Persistent database
    * Caching (yes, caching)
    * Queuing
* When needs arise
