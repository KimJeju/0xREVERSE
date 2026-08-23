/* 0xREVERSE skin script */
(function () {
  'use strict';

  /* ---- typewriter in header ---- */
  var lines = [
    'objdump -d blog.bin | less',
    'analyzing 0x1337 functions ... done',
    'no packer detected. clean binary.',
    'strings blog.bin | grep flag',
    'breakpoint hit at main+0x42',
    'spawning shell ... ok. welcome, guest.'
  ];
  var el = document.getElementById('typewriter');
  if (el) {
    var li = 0, ci = 0, deleting = false;
    var tick = function () {
      var line = lines[li];
      if (!deleting) {
        ci++;
        el.textContent = line.slice(0, ci);
        if (ci === line.length) {
          deleting = true;
          setTimeout(tick, 2200);
          return;
        }
        setTimeout(tick, 40 + Math.random() * 55);
      } else {
        ci -= 3;
        if (ci <= 0) {
          ci = 0;
          deleting = false;
          li = (li + 1) % lines.length;
        }
        el.textContent = line.slice(0, ci);
        setTimeout(tick, deleting ? 18 : 400);
      }
    };
    setTimeout(tick, 600);
  }

  /* ---- fake virtual addresses on index cards ---- */
  var addrs = document.querySelectorAll('.post-card .addr');
  var base = 0x00401000;
  for (var i = 0; i < addrs.length; i++) {
    var a = (base + i * 0x40).toString(16);
    while (a.length < 8) a = '0' + a;
    addrs[i].textContent = '0x' + a;
  }

  /* ---- konami easter egg: matrix rain 5s ---- */
  var seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], pos = 0;
  document.addEventListener('keydown', function (e) {
    pos = (e.keyCode === seq[pos]) ? pos + 1 : 0;
    if (pos !== seq.length) return;
    pos = 0;
    var c = document.createElement('canvas');
    c.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;';
    c.width = window.innerWidth; c.height = window.innerHeight;
    document.body.appendChild(c);
    var ctx = c.getContext('2d');
    var cols = Math.floor(c.width / 14), drops = [];
    for (var j = 0; j < cols; j++) drops[j] = Math.random() * -50;
    var iv = setInterval(function () {
      ctx.fillStyle = 'rgba(11,15,13,0.12)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#3dff88';
      ctx.font = '13px monospace';
      for (var j = 0; j < cols; j++) {
        var ch = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        ctx.fillText(ch, j * 14, drops[j] * 14);
        if (drops[j] * 14 > c.height && Math.random() > 0.975) drops[j] = 0;
        drops[j]++;
      }
    }, 40);
    setTimeout(function () { clearInterval(iv); c.remove(); }, 5000);
  });
})();
