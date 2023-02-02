
  /**
   * Copyright 2022 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *     http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  const APP_SHELL_CACHE = 'app-shell-497112486075977';
  const MEDIA_CACHE = 'media-497112486075977';

  const APP_SHELL_FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
  ];

  const MEDIA_FILES = [    '1tuner.com.webp',
    '1tuner.com-dark.webp',
    'activerecall.com!login.html.webp',
    'activerecall.com!login.html-dark.webp',
    'anaesthetics.app!bluetooth.webp',
    'anaesthetics.app!bluetooth-dark.webp',
    'app.cosee.com.webp',
    'app.cosee.com-dark.webp',
    'app.diagrams.net.webp',
    'app.diagrams.net-dark.webp',
    'app.element.io!!welcome.webp',
    'app.element.io!!welcome-dark.webp',
    'app.storz-bickel.com.webp',
    'app.storz-bickel.com-dark.webp',
    'app.thepocketlab.com.webp',
    'app.thepocketlab.com-dark.webp',
    'app.vysor.io.webp',
    'app.vysor.io-dark.webp',
    'apps.tibbo.com.webp',
    'apps.tibbo.com-dark.webp',
    'audiomass.co.webp',
    'audiomass.co-dark.webp',
    'avg-colour.netlify.app.webp',
    'avg-colour.netlify.app-dark.webp',
    'bangle.io.webp',
    'bangle.io-dark.webp',
    'bitmidi.com.webp',
    'bitmidi.com-dark.webp',
    'boardgamearena.com.webp',
    'boardgamearena.com-dark.webp',
    'boxy-svg.com!app.webp',
    'boxy-svg.com!app-dark.webp',
    'bpmtech.no.webp',
    'bpmtech.no-dark.webp',
    'buddy.edgetx.org.webp',
    'buddy.edgetx.org-dark.webp',
    'bundle.js.org.webp',
    'bundle.js.org-dark.webp',
    'case.xchart.com.webp',
    'case.xchart.com-dark.webp',
    'chrome.google.com!webstore!detail!croskeys-by-crosexperts!akiaafoeijpibmbbfaebhkhccepbdgfi.webp',
    'chrome.google.com!webstore!detail!croskeys-by-crosexperts!akiaafoeijpibmbbfaebhkhccepbdgfi-dark.webp',
    'cleanfeed.net!studio.webp',
    'cleanfeed.net!studio-dark.webp',
    'code.irobot.com.webp',
    'code.irobot.com-dark.webp',
    'code.makewonder.com!cue.webp',
    'code.makewonder.com!cue-dark.webp',
    'codeit.codes.webp',
    'codeit.codes-dark.webp',
    'codev5.vex.com.webp',
    'codev5.vex.com-dark.webp',
    'configure.zsa.io.webp',
    'configure.zsa.io-dark.webp',
    'dannymoerkerke.github.io!file-tree.webp',
    'dannymoerkerke.github.io!file-tree-dark.webp',
    'dev.to.webp',
    'dev.to-dark.webp',
    'developer.chrome.com!blog!fugu-showcase.webp',
    'developer.chrome.com!blog!fugu-showcase-dark.webp',
    'dj.beatport.com!home.webp',
    'dj.beatport.com!home-dark.webp',
    'docs.craft.do.webp',
    'docs.craft.do-dark.webp',
    'docs.qq.com!desktop.webp',
    'docs.qq.com!desktop-dark.webp',
    'duino.app.webp',
    'duino.app-dark.webp',
    'edit.photo.webp',
    'edit.photo-dark.webp',
    'edit.photostack.app.webp',
    'edit.photostack.app-dark.webp',
    'edit.video.webp',
    'edit.video-dark.webp',
    'editor.bridge-core.app.webp',
    'editor.bridge-core.app-dark.webp',
    'editor.construct.net.webp',
    'editor.construct.net-dark.webp',
    'editor.kota-yata.com.webp',
    'editor.kota-yata.com-dark.webp',
    'elk.zone.webp',
    'elk.zone-dark.webp',
    'ember.ly.webp',
    'ember.ly-dark.webp',
    'esc-configurator.com.webp',
    'esc-configurator.com-dark.webp',
    'esphome.github.io!esp-web-tools.webp',
    'esphome.github.io!esp-web-tools-dark.webp',
    'excalidraw.com.webp',
    'excalidraw.com-dark.webp',
    'flash.android.com.webp',
    'flash.android.com-dark.webp',
    'fpv.wtf!!about.webp',
    'fpv.wtf!!about-dark.webp',
    'fuse.littlebits.com.webp',
    'fuse.littlebits.com-dark.webp',
    'github.dev!github!dev.webp',
    'github.dev!github!dev-dark.webp',
    'gltf.report.webp',
    'gltf.report-dark.webp',
    'grapheneos.org!install!webflashing-factory-images.webp',
    'grapheneos.org!install!webflashing-factory-images-dark.webp',
    'graphtoy.com.webp',
    'graphtoy.com-dark.webp',
    'h5.topwargame.com!h5game!index.html.webp',
    'h5.topwargame.com!h5game!index.html-dark.webp',
    'haven.pages.dev.webp',
    'haven.pages.dev-dark.webp',
    'hexed.it.webp',
    'hexed.it-dark.webp',
    'hoppscotch.io.webp',
    'hoppscotch.io-dark.webp',
    'hoten.cc!zc!play.webp',
    'hoten.cc!zc!play-dark.webp',
    'install.wled.me.webp',
    'install.wled.me-dark.webp',
    'josephrocca.github.io!clip-image-sorter.webp',
    'josephrocca.github.io!clip-image-sorter-dark.webp',
    'kenchris.github.io!webnfc-groceries.webp',
    'kenchris.github.io!webnfc-groceries-dark.webp',
    'kryogenix.org!farmbound.webp',
    'kryogenix.org!farmbound-dark.webp',
    'leonidasesteban.com.webp',
    'leonidasesteban.com-dark.webp',
    'lichess.org.webp',
    'lichess.org-dark.webp',
    'linear.app.webp',
    'linear.app-dark.webp',
    'linkcleaner.app.webp',
    'linkcleaner.app-dark.webp',
    'logiwebconnect.com.webp',
    'logiwebconnect.com-dark.webp',
    'logseq.com!spa=true.webp',
    'logseq.com!spa=true-dark.webp',
    'loilo.github.io!diffr.webp',
    'loilo.github.io!diffr-dark.webp',
    'lookscanned.io!scan.webp',
    'lookscanned.io!scan-dark.webp',
    'make.firialabs.com.webp',
    'make.firialabs.com-dark.webp',
    'maskable.app.webp',
    'maskable.app-dark.webp',
    'mconverter.eu.webp',
    'mconverter.eu-dark.webp',
    'md.nico.dev.webp',
    'md.nico.dev-dark.webp',
    'microsoftedge.github.io!Demos!pwamp.webp',
    'microsoftedge.github.io!Demos!pwamp-dark.webp',
    'microsoftedge.github.io!Demos!wami.webp',
    'microsoftedge.github.io!Demos!wami-dark.webp',
    'mishipay.shop.webp',
    'mishipay.shop-dark.webp',
    'my.flipp.dev.webp',
    'my.flipp.dev-dark.webp',
    'my.numworks.com.webp',
    'my.numworks.com-dark.webp',
    'narrow.one.webp',
    'narrow.one-dark.webp',
    'natto.dev.webp',
    'natto.dev-dark.webp',
    'niftypass.app.webp',
    'niftypass.app-dark.webp',
    'okso.app.webp',
    'okso.app-dark.webp',
    'open.spotify.com.webp',
    'open.spotify.com-dark.webp',
    'paintz.app.webp',
    'paintz.app-dark.webp',
    'panel.hostmeapp.com.webp',
    'panel.hostmeapp.com-dark.webp',
    'photoshop.adobe.com.webp',
    'photoshop.adobe.com-dark.webp',
    'pinafore.social.webp',
    'pinafore.social-dark.webp',
    'pixa.pics.webp',
    'pixa.pics-dark.webp',
    'pixlr.com.webp',
    'pixlr.com-dark.webp',
    'play.geforcenow.com.webp',
    'play.geforcenow.com-dark.webp',
    'play.spacelancers.com.webp',
    'play.spacelancers.com-dark.webp',
    'pokedex.org.webp',
    'pokedex.org-dark.webp',
    'postr.me.webp',
    'postr.me-dark.webp',
    'pwa.journalisticapp.com.webp',
    'pwa.journalisticapp.com-dark.webp',
    'pwa.kiwix.org!www!index.html.webp',
    'pwa.kiwix.org!www!index.html-dark.webp',
    'qrsnapper.com.webp',
    'qrsnapper.com-dark.webp',
    'radio-house.app.webp',
    'radio-house.app-dark.webp',
    'readyplayer.me!avatar.webp',
    'readyplayer.me!avatar-dark.webp',
    'regex101.com.webp',
    'regex101.com-dark.webp',
    'remap-keys.app.webp',
    'remap-keys.app-dark.webp',
    'roland50.studio.webp',
    'roland50.studio-dark.webp',
    'scrapbook-pwa.web.app.webp',
    'scrapbook-pwa.web.app-dark.webp',
    'setu-upi-over-nfc.herokuapp.com!how-it-works.webp',
    'setu-upi-over-nfc.herokuapp.com!how-it-works-dark.webp',
    'sharedgametimer.com.webp',
    'sharedgametimer.com-dark.webp',
    'shots.so.webp',
    'shots.so-dark.webp',
    'snapdrop.net.webp',
    'snapdrop.net-dark.webp',
    'snapper-gps.herokuapp.com.webp',
    'snapper-gps.herokuapp.com-dark.webp',
    'songwhip.com.webp',
    'songwhip.com-dark.webp',
    'spike.legoeducation.com.webp',
    'spike.legoeducation.com-dark.webp',
    'sqliteviewer.app.webp',
    'sqliteviewer.app-dark.webp',
    'squoosh.app.webp',
    'squoosh.app-dark.webp',
    'stackblitz.com.webp',
    'stackblitz.com-dark.webp',
    'stackedit.io.webp',
    'stackedit.io-dark.webp',
    'stadia.google.com!controller.webp',
    'stadia.google.com!controller-dark.webp',
    'stedit.app.webp',
    'stedit.app-dark.webp',
    'studio.samlabs.com.webp',
    'studio.samlabs.com-dark.webp',
    'svgco.de.webp',
    'svgco.de-dark.webp',
    'tasmota.github.io!install.webp',
    'tasmota.github.io!install-dark.webp',
    'tgstorage.com.webp',
    'tgstorage.com-dark.webp',
    'thelogbook.app.webp',
    'thelogbook.app-dark.webp',
    'thesession.org.webp',
    'thesession.org-dark.webp',
    'three-colors.opl.io.webp',
    'three-colors.opl.io-dark.webp',
    'tidepool.org!uploader.webp',
    'tidepool.org!uploader-dark.webp',
    'tinder.com.webp',
    'tinder.com-dark.webp',
    'toot.cafe.webp',
    'toot.cafe-dark.webp',
    'traintimes.org.uk.webp',
    'traintimes.org.uk-dark.webp',
    'trovo.live.webp',
    'trovo.live-dark.webp',
    'twitter.com.webp',
    'twitter.com-dark.webp',
    'tylify.app.webp',
    'tylify.app-dark.webp',
    'ui.perfetto.dev.webp',
    'ui.perfetto.dev-dark.webp',
    'usevia.app.webp',
    'usevia.app-dark.webp',
    'uspeaking.netlify.app.webp',
    'uspeaking.netlify.app-dark.webp',
    'vscode.dev.webp',
    'vscode.dev-dark.webp',
    'web-gphoto2.rreverser.com.webp',
    'web-gphoto2.rreverser.com-dark.webp',
    'web-serial-app.netlify.app.webp',
    'web-serial-app.netlify.app-dark.webp',
    'web.blockbench.net.webp',
    'web.blockbench.net-dark.webp',
    'web.brewflasher.com.webp',
    'web.brewflasher.com-dark.webp',
    'web.snapchat.com.webp',
    'web.snapchat.com-dark.webp',
    'web.telegram.org!z.webp',
    'web.telegram.org!z-dark.webp',
    'whatpwacando.today.webp',
    'whatpwacando.today-dark.webp',
    'wootility.io.webp',
    'wootility.io-dark.webp',
    'wormhole.app.webp',
    'wormhole.app-dark.webp',
    'airconsole.com.webp',
    'airconsole.com-dark.webp',
    'canva.com.webp',
    'canva.com-dark.webp',
    'capcut.com!editor.webp',
    'capcut.com!editor-dark.webp',
    'conifer-music.app.webp',
    'conifer-music.app-dark.webp',
    'duolingo.com.webp',
    'duolingo.com-dark.webp',
    'espruino.com!ide.webp',
    'espruino.com!ide-dark.webp',
    'figma.com.webp',
    'figma.com-dark.webp',
    'fotor.com!photo-editor-app!editor!basic.webp',
    'fotor.com!photo-editor-app!editor!basic-dark.webp',
    'globs.design.webp',
    'globs.design-dark.webp',
    'improv-wifi.com.webp',
    'improv-wifi.com-dark.webp',
    'instagram.com.webp',
    'instagram.com-dark.webp',
    'irccloud.com.webp',
    'irccloud.com-dark.webp',
    'jsmusicdb.com.webp',
    'jsmusicdb.com-dark.webp',
    'lightningmaps.org.webp',
    'lightningmaps.org-dark.webp',
    'microsoft.com!en-us!makecode.webp',
    'microsoft.com!en-us!makecode-dark.webp',
    'netflix.com.webp',
    'netflix.com-dark.webp',
    'photopea.com.webp',
    'photopea.com-dark.webp',
    'pinterest.de.webp',
    'pinterest.de-dark.webp',
    'senomix.com!timesheet.webp',
    'senomix.com!timesheet-dark.webp',
    'soundslice.com.webp',
    'soundslice.com-dark.webp',
    'stemplayer.com.webp',
    'stemplayer.com-dark.webp',
    'tiktok.com.webp',
    'tiktok.com-dark.webp',
    'tldraw.com.webp',
    'tldraw.com-dark.webp',
    'topdecked.com.webp',
    'topdecked.com-dark.webp',
    'vimonlineeditor.com.webp',
    'vimonlineeditor.com-dark.webp',
    'xbox.com!en-US!play!games!fortnite!BT5P2X999VH2.webp',
    'xbox.com!en-US!play!games!fortnite!BT5P2X999VH2-dark.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd-dark.webp',
    'yt-playlist-notifier.web.app.webp',
    'yt-playlist-notifier.web.app-dark.webp'
  ];

  const ALL_CACHES = [APP_SHELL_CACHE, MEDIA_CACHE];

  self.addEventListener('install', (installEvent) => {
    installEvent.waitUntil((async () => {
      const appShellCache = await caches.open(APP_SHELL_CACHE);
      await appShellCache.addAll(APP_SHELL_FILES);
      const mediaCache = await caches.open(MEDIA_CACHE);
      await mediaCache.addAll(MEDIA_FILES);
      return self.skipWaiting();
    })());
  });

  self.addEventListener('activate', (activateEvent) => {
    activateEvent.waitUntil((async () => {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map(async (cacheKey) => {
        if (!ALL_CACHES.includes(cacheKey)) {
          await caches.delete(cacheKey);
        }
      }));
      return self.clients.claim();
    })());
  });

  self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith((async () => {
      const request = fetchEvent.request;
      return fetch(request).catch(() => caches.match(request));
    })());
  });

  