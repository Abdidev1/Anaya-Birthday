# Anaya-Birthday

I wanted to do something way better for my best friend Anaya’s 15th birthday instead of just sending a basic text message. School would be completely miserable without her, so I decided to code a small interactive surprise website for her birthday. I wanted to pack in inside jokes, a letter, some mini-games, and a real Roblox gift card code.

When you first open the site, a dark overlay locks everything until you enter her birthday (2407) to get in. Inside, there’s a main dashboard with a greeting, a quick stats card about our friendship, and three interactive buttons that hand out stupid custom perks—like a free snacks pass, a 30-minute venting session, and full music control. There’s also a heartfelt modal letter she can open, and a surprise button that spawns bouncing bears and cake emojis all over the screen.

The main event is the scratch-off gift card. I placed an HTML5 canvas over her actual Roblox code and used pure JS (globalCompositeOperation = 'destination-out') so when she drags her mouse or finger across the screen, it erases the gray layer and reveals the code underneath.

I kept the tech stack super simple—just plain HTML, CSS, and Vanilla JS. I wrote a few basic @keyframes animations for the party mode and used standard Flexbox with a small media query at 500px so the layout stacks nicely on her phone.
