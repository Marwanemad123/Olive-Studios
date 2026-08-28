/* ─────────────────────────────────────────────────────────────
   The Collector's Circle — client submission helper
   ---------------------------------------------------------------
   Sends every website form submission to the Google Apps Script
   Web App, which appends a row to the "Collector's Circle" Google
   Sheet (one tab per form type).

   This file is the source of truth. The copy that ships with the
   Olive Studios site lives at `src/collector.js` and must be kept
   identical to this one.

   Setup: see ../README.md
───────────────────────────────────────────────────────────────── */
(function (global) {
  'use strict';

  // The Apps Script Web App URL, injected by src/collector-config.js
  // (window.OLIVE_COLLECTOR_ENDPOINT). Falls back to empty = disabled.
  function endpoint() {
    return (global.OLIVE_COLLECTOR_ENDPOINT || '').trim();
  }

  // Optional shared token (window.OLIVE_COLLECTOR_TOKEN). Not a real
  // secret — it only filters out drive-by bots. Must match the
  // TOKEN Script Property in Apps Script, if you set one there.
  function token() {
    return (global.OLIVE_COLLECTOR_TOKEN || '').trim();
  }

  var KNOWN_FORMS = [
    'contact',
    'bespoke',
    'corporate',
    'collectors_circle',
    'newsletter',
    'order'
  ];

  function meta() {
    try {
      return {
        page: (location.hash || location.pathname || '') + '',
        appPage: (function () {
          try { return localStorage.getItem('olive_page') || ''; } catch (e) { return ''; }
        })(),
        lang: (document.documentElement.lang || '') + '',
        referrer: document.referrer || '',
        userAgent: navigator.userAgent || '',
        screen: (global.innerWidth || '') + 'x' + (global.innerHeight || '')
      };
    } catch (e) {
      return {};
    }
  }

  /**
   * Fire-and-forget submission. Never throws, never blocks the UI.
   * @param {string} formType  one of KNOWN_FORMS
   * @param {object} data       flat key/value map of the form fields
   * @returns {Promise<boolean>} resolves true if a request was dispatched
   */
  function submit(formType, data) {
    var url = endpoint();
    if (!url) {
      // Not configured yet — log so it's obvious during setup.
      if (global.console) console.warn('[Collector] OLIVE_COLLECTOR_ENDPOINT not set — submission dropped:', formType, data);
      return Promise.resolve(false);
    }
    if (KNOWN_FORMS.indexOf(formType) === -1 && global.console) {
      console.warn('[Collector] unknown formType:', formType);
    }

    var payload = {
      formType: formType,
      token: token(),
      submittedAt: new Date().toISOString(),
      data: data || {},
      meta: meta()
    };
    var body = JSON.stringify(payload);

    // 1) sendBeacon — survives navigation, ideal for the checkout flow.
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
        if (navigator.sendBeacon(url, blob)) return Promise.resolve(true);
      }
    } catch (e) { /* fall through */ }

    // 2) fetch fallback. text/plain keeps it a "simple" CORS request
    //    (no preflight); we don't need to read the response.
    try {
      return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: body
      }).then(function () { return true; }).catch(function () { return false; });
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  global.OliveCollector = { submit: submit, KNOWN_FORMS: KNOWN_FORMS };
})(typeof window !== 'undefined' ? window : this);
