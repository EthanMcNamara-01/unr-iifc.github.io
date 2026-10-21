// Renders the content from data.js into each page. You shouldn't need to edit this file.
(function () {
  var data = window.IIFC;
  if (!data) return;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function initials(name) {
    return name.split(/\s+/).map(function (p) { return p.charAt(0); }).join("").slice(0, 2);
  }

  // Home page band of Greek letters
  fill("letters-band", data.chapters.map(function (c) {
    return '<li><a href="chapters.html#' + esc(c.id) + '">' +
      '<span class="greek" aria-hidden="true">' + esc(c.letters) + '</span>' +
      '<span class="label">' + esc(c.name) + '</span></a></li>';
  }).join(""));

  // Chapters page
  fill("chapter-list", data.chapters.map(function (c) {
    var links = [];
    if (c.instagram) links.push('<a href="' + esc(c.instagram) + '">Instagram</a>');
    if (c.website) links.push('<a href="' + esc(c.website) + '">National website</a>');
    return '<li class="chapter" id="' + esc(c.id) + '">' +
      '<div class="greek" aria-hidden="true">' + esc(c.letters) + '</div>' +
      '<div>' +
        '<h2>' + esc(c.name) + '</h2>' +
        (c.founded ? '<p class="founded">' + esc(c.founded) + '</p>' : '') +
        (c.blurb ? '<p>' + esc(c.blurb) + '</p>' : '') +
        (c.photo ? '<img class="photo" src="' + esc(c.photo) + '" alt="Members of ' + esc(c.name) + '">' : '') +
        (links.length ? '<p class="links">' + links.join("") + '</p>' : '') +
      '</div></li>';
  }).join(""));

  // Recruitment page
  var r = data.recruitment;
  fill("recruit-season", r.season
    ? '<p><strong>' + esc(r.season) + '</strong></p>'
    : '<div class="notice"><p>Recruitment dates for the next term will be posted here. Fill out the interest form and we\'ll let you know as soon as they\'re set.</p></div>');

  fill("recruit-steps", r.steps.map(function (s) {
    return '<li><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div></li>';
  }).join(""));

  fill("recruit-reqs", r.requirements.length
    ? '<ul class="req-list">' + r.requirements.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join("") + '</ul>'
    : '<p>Eligibility requirements will be posted before recruitment begins.</p>');

  document.querySelectorAll("[data-interest-form]").forEach(function (btn) {
    if (r.interestFormUrl) {
      btn.href = r.interestFormUrl;
    } else {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
      btn.textContent = "Interest form opens soon";
    }
  });

  // Events
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var upcoming = data.events
    .map(function (e) {
      var p = e.date.split("-");
      return { e: e, d: new Date(+p[0], +p[1] - 1, +p[2]) };
    })
    .filter(function (x) { return x.d >= today; })
    .sort(function (a, b) { return a.d - b.d; });

  fill("event-list", upcoming.length
    ? upcoming.map(function (x) {
        var e = x.e;
        var meta = [e.time, e.location].filter(Boolean).map(esc).join(", ");
        return '<li class="event">' +
          '<time datetime="' + esc(e.date) + '"><span class="m">' + months[x.d.getMonth()] + '</span><span class="d">' + x.d.getDate() + '</span></time>' +
          '<div><h3>' + esc(e.title) + '</h3>' +
          (meta ? '<p class="meta">' + meta + '</p>' : '') +
          (e.description ? '<p>' + esc(e.description) + '</p>' : '') +
          '</div></li>';
      }).join("")
    : '<li><div class="notice"><p>No events are scheduled right now. Check back soon for council meetings, philanthropy, and recruitment events.</p></div></li>');

  // Executive board
  fill("board", data.officers.map(function (o, i) {
    var name = o.name || "To be announced";
    var avatar = o.photo
      ? '<img class="avatar" src="' + esc(o.photo) + '" alt="">'
      : '<span class="avatar" aria-hidden="true">' + esc(o.name ? initials(o.name) : "–") + '</span>';
    return '<li class="officer' + (i === 0 ? ' lead' : '') + '">' + avatar +
      '<div><span class="name">' + esc(name) + '</span>' +
      '<span class="role">' + esc(o.role) + '</span>' +
      (o.email ? '<a href="mailto:' + esc(o.email) + '">' + esc(o.email) + '</a>' : '') +
      '</div></li>';
  }).join(""));

  // Contact line in the footer
  var c = data.council;
  var contact = [];
  if (c.email) contact.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.instagram) contact.push('<a href="' + esc(c.instagram) + '">Instagram</a>');
  fill("footer-contact", contact.join(" &nbsp;|&nbsp; "));

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
