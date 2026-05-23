+++
title = "Touhou99"
date = 2025-05-11
summary = "Touhou99 is a Touhou-inspired multiplayer (LAN) game. As one of the three working on this project, I was in charge of Player Mechanics, like the movement, shooting and bombs, networking player mechanics and creating tools for UI/UX. "
featured = true
tags = ["systems", "gameplay"]
categories = ["C#", "Networking", "Unity"]
main_image = "/images/projects/touhou.png"

[params]
  featured = true  # Show in featured section on homepage
  showInPostList = true  # Show in timeline lists alongside blog posts
+++

<br>
<br>
<br>

{{% info title="[Itch.io](https://tristansa.itch.io/touhou99)" %}}
<div class="info_right">
  <div class="item">Platform(s)</div>
  <div class="item">Role</div>
  <div class="item">Game Engine</div>
  <div class="item">Team Size</div>
  <div class="item">Development Time</div>
</div>
<div class="info_left">
  <div class="item">Windows (PC)</div>
  <div class="item">Programmer (Networking & UI/UX)</div>
  <div class="item">Unity</div>
  <div class="item">12</div>
  <div class="item">12 weeks</div>
</div>
{{% /info %}} 

## Contributions  

- Developed the player actions, movement, shooting, bomb mechanics
  - When player reaches a power level of 4, shooting will lock onto the closest enemy using [Vector Curl](https://en.wikipedia.org/wiki/Curl_(mathematics))
- Using Steam Networking Sockets, networked the bomb mechanics that get placed on the opposing players clients
- Created UI tools to create settings options
